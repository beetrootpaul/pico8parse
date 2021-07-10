# replacement for us poor lost souls windows users, thanks
# most of this is untested

#region stuff
[CmdletBinding()]
param (
    [Parameter()]
    [String[]]
    $Targets
)
function Invoke-Target {
    param ([Parameter(Mandatory)][String] $Target)
    $Local:it = $_targets[$target]
    if ($Local:it.GetType().Name -cne 'DependsOn') {
        Invoke-Command -ScriptBlock $Local:it -NoNewScope
    } else { $Local:it.Invoke() }
}
class DependsOn {
    [Array] $_dependencyTargets
    [ScriptBlock] $_targetItself
    DependsOn([Array] $DependencyTargets) {
        $this._dependencyTargets = $DependencyTargets
    }
    [DependsOn] Then([ScriptBlock] $TargetItself) {
        $this._targetItself = $TargetItself
        return $this
    }
    [Void] Invoke() {
        $this._dependencyTargets | ForEach-Object { Invoke-Target "$_" }
        if ($this._targetItself) { Invoke-Command -ScriptBlock $this._targetItself -NoNewScope }
    }
}
#endregion

#$DOCS = '.\docs\*.md' # unused
if (-not $PROCESSOR) { $PROCESSOR = '/opt/v8/tools/linux-tick-processor' }
$LIB = '.\node_modules'
$BIN = "$LIB\.bin"

if (-not $Targets -or $Targets -ceq 'all') { $Targets = 'coucou' }
$_targets = @{
    'coucou' = { Write-Host 'coucou' }

    # Main tasks
    # ----------
    'build' = { & $BIN\gulp.ps1 build }
    'lint' = { & $BIN\gulp.ps1 lint }

    # Install and internal updates
    # ----------------------------
    'install' = { npm install }
    'update' = { # This is required if mocha, expect or benchmark is updated.
        Copy-Item $LIB\spec\lib\* .\test\lib\
        Copy-Item $LIB\benchmark\benchmark.js .\test\lib\
    }
    'version-bump' = {
        & $BIN\gulp.ps1 version-bump
        git add luaparse.js
    }

    # Tests
    # -----
    'test-node' = { node .\test\runner.js --console }
    'test' = { & $BIN\testem.ps1 ci }
    'testem-engines' = { & $BIN\testem.ps1 -l node,ringo,rhino,rhino1.7R5 }
    # Scaffold all test files in the scaffolding dir.
    'scaffold-tests' = {
        Get-ChildItem .\test\scaffolding\ -File | ForEach-Object {
            $FILE = $_.Name
            Invoke-Target scaffold-test
        }
    }
    'scaffold-test' = {
        node .\scripts\scaffold-test --name=$FILE .\test\scaffolding\$FILE > .\test\spec\$FILE.js
    }

    # Documentation
    # -------------
    'docs' = [DependsOn]::new(@('coverage', 'docs-test', 'docs-md'))
    'docs-index' = {
        Get-Content .\docs\layout\head.html  > .\docs\index.html
        & .$BIN\marked.ps1 README.md --gfm  >> .\docs\index.html
        Get-Content .\docs\layout\foot.html >> .\docs\index.html
    }
    'docs-md' = { Write-Host 'cant be bothered' }
    '%.html' = { Write-Host 'cant be bothered' }

    # Coverage
    # --------
    'coverage' = {
        Remove-Item -Recurse -Force .\html-report\ .\docs\coverage\
        & $BIN\nyc.ps1 --reporter=html --report-dir=.\docs\coverage node .\test\runner.js --console | Out-Null
    }

    # Benchmark
    # ---------
    'benchmark' = { node .\scripts\benchmark -v .\benchmarks\lib\ParseLua.lua }
    'profile' = { Write-Host 'no bash, no run.sh' }
    'benchmark-previous' = { Write-Host 'no bash, no run.sh' }

    # Quality Assurance
    # -----------------
    'complexity-analysis' = {
        Write-Host "===================== Complexity analysis ============================"
        node .\scripts\complexity 10
        & $BIN\cr.ps1 -lws --maxcc 22 luaparse.js
    }
    'coverage-analysis' = [DependsOn]::new(@('coverage')).Then({
        & $BIN\nyc.ps1 check-coverage --statements 100 --branches 100 --functions 100
    })
    'qa' = [DependsOn]::new(@('test', 'lint', 'complexity-analysis', 'coverage-analysis'))

    'clean' = {
        Remove-Item -Force docs/*.html
        Remove-Item -Recurse -Force lib-cov coverage html-report docs/coverage/
    }
} #</> $_targets

$Targets | ForEach-Object { Invoke-Target "$_" }
Write-Host ''