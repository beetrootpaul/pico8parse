<script src="../pico8parse.js"></script>

Input Lua code on the right side and press the Parse button to generate the AST as a JSON.

<form class="text-center form-inline">
  <select name="version"></select>
  <button onclick="event.preventDefault();parseInput()" class="btn">Parse</button>
</form>

<div class="text-center">
  <textarea name="input" style="min-width:42%;max-width:42%;min-height:120px;height:52vh"></textarea>
  <textarea name="output" style="min-width:42%;max-width:42%;min-height:120px;height:52vh"></textarea>
</div>

<script>
  var input = document.getElementsByName('input')[0]
    , output = document.getElementsByName('output')[0]
    , version = document.getElementsByName('version')[0]
    , ast = {};

  function parseInput() {
    ast = pico8parse.parse(input.value, { luaVersion: version.value });
    console.log("ast =");
    console.dir(ast);
    output.value = JSON.stringify(ast, null, 2);
  }

  (function() {
    var lst = []
      , ver, k;
    for (ver in pico8parse.versionFeatures) lst.push(ver); lst.sort();
    for (k = 0, ver = lst[0]; k < lst.length; ver = lst[++k])
      version.add(new Option(ver, ver));
    version.value = pico8parse.defaultOptions.luaVersion;
  })();
</script>
