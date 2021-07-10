This is a fork of the [luaparse](fstirlitz.github.io/luaparse) by Oskar Schöldström (and other).

See [the original README](README-luaparse.md) or the linked GitHub above for more information about it. If the intention is to use the present JavaScript package, the original README is probably the first thing to look at.

The intention is to add support for the PICO-8 flavour of Lua which brings a few new syntaxes and tokens (described after).

## A Fork of the luaparse

A few changes were made regarding the versions of Lua that were already supported by the original luaparse:

 - from Lua 5.2 onward, hex numerals may start with a dot: `a = 0x.A` is valid
 - the parser state would not be entirely reset (which had no impact until it did)
 - a, hum, "replacement" to `make` was... attempted (as the `make.ps1`)
 - (as a side note: version feature "inheritance")

Ideally, no breaking changes were added in regard to the parsing of Lua 5.1, 5.2, 5.3 and LuaJIT. These versions should still behave the same outside of the mentioned points above.

## Other Mentions and Thanks

The [PICO-8 wikia](https://pico-8.fandom.com/wiki/Pico-8_Wikia) proved a great help at gathering random information about the API.

As well as the [luacheck](https://github.com/mpeterv/luacheck) project and the [picotool](https://github.com/dansanderson/picotool).

And obviously zep &commat;lexaloffle and their [PICO-8](https://www.lexaloffle.com/pico-8.php) fantasy console.

# Support for the PICO-8 Flavour of Lua

The PICO-8 Lua is based of the 5.2 version of the Lua language, a such most 5.2 syntaxes and behavior are present in PICO-8 Lua.

The values added for the parser `luaVersion` option are:

 - `'PICO-8'` (should not be used, just for feature inheritance)
 - `'PICO-8-0.2.1'`
 - `'PICO-8-0.2.2'` (adds support for some escape sequences)

> Disclaimer: the first implemented version is from PICO-8 0.2.1. Furthermore, this was mainly developed and tested with 0.2.1 as of yet.

## Numerals

### Binary Literal

PICO-8 accepts binary notation for numeral the same way Lua 5.2+ does for hexadecimal:

 - `0b101010`: 42
 - `0b0.1`: 0.5
 - `0b10.`: 2.
 - `0b.01`: .125

### No Exponent, no Complex, no Unsigned nor Long

Lua numerals can consist of trailing "U", "I" and "L"s, none of which is a supported notation for PICO-8. The same way, the exponential and binary exponential notations are seen as error:

 - `2.1i`
 - `4U`
 - `0xB0p99`
 - `0.31416E1`
 - and so on...

## Operators

### Unary Operators

The following are unary operators on a number (with the same precedence as `-`, `~` and `not`):

 - `@` example `@0x2000`
 - `$` example `$-1`
 - `%` example `%100`

### Binary Operators

Here is a set of bitwise operators (so on numbers)

 - logical shift right: `>>>` (ignores the sign)
 - rotate left: `<<>`
 - rotate right: `>><`
 - the bitwise xor from Lua (`~`) is replaced with the token `^^`

The Lua integer division (usually written `//`) represents a single line comment in PICO-8 (_TODO: implement_ \*hum\*) so the `\` is used instead.

This flavour also implement the `!=` as an alias for `~=`.

The shift and rotates have the same precedence as Lua's shift operators `<<` and `>>`. The exclusive or, not-equal and integer division keep the same precedence.

### Assignment Operations

Every binary operator that is not a comparison have an assignment syntax. The full list is:

 assignment | equivalent
------------|---------------
 `a += b`   | `a = a + b`
 `a -= b`   | `a = a - b`
 `a *= b`   | `a = a * b`
 `a /= b`   | `a = a / b`
 `a \= b`   | `a = a \ b`
 `a %= b`   | `a = a % b`
 `a ^= b`   | `a = a ^ b`
 `a ..= b`  | `a = a .. b`
 `a \|= b`  | `a = a \| b` <!-- the back-slash is only here because it breaks the table otherwise -->
 `a &= b`   | `a = a & b`
 `a ^^= b`  | `a = a ^^ b`
 `a <<= b`  | `a = a << b`
 `a >>= b`  | `a = a >> b`
 `a >>>= b` | `a = a >>> b`
 `a <<>= b` | `a = a <<> b`
 `a >><= b` | `a = a >>< b`

It must be noted that for this syntax to be implemented, a new type of AST node was added under the name of `'AssignmentOperatorStatement'`. These present the properties `variables` and `init` of an `'AssignmentStatement'` as well as the `operator` of a `'BinaryExpression'` node.

## Single Line Statements

> Important notice: this feature introduces a meaning to a new-line sequence, which is a blank character and get ignored by Lua.

### Idea

This syntax introduce the possibility to write certain block without having to specify its bounds using tokens, similarly to some other languages (for example an `if` statement in JavaScript do no need curly brackets when its body consists of only one "line" of instructions).

```lua
if (condition) instruction1()
instruction2()

-- is semantically the same as

if condition then instruction1() end instruction2()
```

```lua
if (condition) instruction1() else instruction2()

-- is semantically the same as

if condition then instruction1() else instruction2() end
```

```lua
while (condition) instruction()

-- is semantically the same as

while condition do instruction() end
```

Notice how:
 - the parenthesis enclosing the condition are necessary
 - this syntax of the `if` statement cannot present an `elseif` clause
 - no instruction are present after the syntax _on the same line_

### Quirks

While this change initially only apply to the `if` and `while` statements, its actual implementation in the PICO-8 Lua runtime leads to unexpectedly correct or incorrect syntaxes which also impacts the standard `do`, `function` and `for` amongst other things.

Without any evidences to back the following claims as to how PICO-8 parses its Lua, testings have shown that the behavior of the actual implementation are similar to applying the following preprocessing to the raw script:

If a line contains an `if` token (resp. `while`) which does not present an associated `then` token (resp. `do`) right after its condition, the very next new-line sequence (or if lack thereof, end-of-file) is treated as an `end` token. This `end` token is in no way associated with the opened `if .. then` statement's body block (resp. `do .. while`) and essentially gives any end-of-lines _potentially_ the meaning of an `end` token.

This gives rise to a bunch of cursed valid syntaxes (try to guess the scopes):

<table>
<tr><th>PICO-8 Syntax</th><th>Result of Preprocess</th></tr>
<tr>
<td>

```lua
if (cdt) do
end
```

</td>
<td>

```lua
if cdt then do end
end
```

</td>
</tr>
<tr>
<td>

```lua
if (cdt) end do
```

</td>
<td>

```lua
if cdt then end do end
```

</td>
</tr>
<tr>
<td>

```lua
if (cdt) end function fun()
```

</td>
<td>

```lua
if cdt then end function fun() end
```

</td>
</tr>
<tr>
<td>

```lua
-- incorrect!
if (cdt1) end while (cdt2) instr() do

-- correct!
if (cdt1) end while (cdt2) do instr()
```

</td>
<td>

```lua
-- indeed... weird
if cdt1 then end while cdt2 instr() do end

-- correct!
if cdt1 then end while cdt2 do instr() end
```

</td>
</tr>
</table>

> Note for slimmer screens: outside of the first row, all are on a single line.

### Additionally

This syntax of "single line" statements also comes with an arbitrary rule that the character preceding the `if` (or `while`) token must be either:
 - a blank character (whitespace, tabulation, newline sequence)
 - a numeral: `a = 0xfif (cdt) instr()` is valid (and `a` is 15)
 - a multiline comment **only** if one of these 3 point is valid before it

```lua
-- invalid
instr()--[[]]if (cdt) instr()
instr()--[[]]--[[]]if (cdt) instr()

-- valid
instr() --[[]]if (cdt) instr()
instr()--[[]] if (cdt) instr()
a = 0xf--[[]]if (cdt) instr()
```

Finally, it is important to notice that the body of the clause cannot be empty. Or maybe just sometimes. To be more specific, a single line `if` or `while` with no instruction following (before end-of-line) is not considered valid, but a single line `if` containing an `else` clause (albeit empty) is valid.

```lua
-- invalid
while (cdt)
if (cdt)

--valid
while (cdt) instr()
if (cdt) instr()
if (cdt) else instr()

-- also valid
if (cdt) else
```

## Print Shorthand

The special character `?` acts as a short hand for the `print` function. As such, it does expect a parameter list as its following tokens

Example: `? "text", 1, 2, 3` is equivalent to `print("text", 1, 2, 3)`.

However the implementation of it is somewhat capricious and very new-line dependent:
 - nothing can precede the `?` character except a multiline comment
 - the rest of the line past the `?` must be a valid parameter list
 - it does not expect the parameter list to be enclosed in parenthesis

```lua
-- invalid
instr() ?"text"
?"text" ; instr()
?("text", 1)

-- still invalid
instr()    --[[]]    ?"text"

-- valid
?"text"
--[[]]?"text"
?("text"), (1)
```

## P8SCII (experimental)

> Remark: this feature is only available when specifying a version above `'PICO-8-0.2.2'` and might be erroneous in some places.

A new set of escape sequences become valid in PICO-8:

 - `\*`
 - `\+`
 - `\-`
 - `\|`
 - `\#`
 - `\^`

The following sequence are already valid in Lua 5.2 and thus are not modified, but they get a mention as their meaning was changed (and maybe their validation pattern too):

 - `\a` "audio"
 - `\v` decorate previous character
 - `\f` set foreground colour
 - `\014` switch to font defined at 0x5600
 - `\015` switch to default font
