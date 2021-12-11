pico8parse uses a set of "features" to describe Lua versions. Here is the list of what each feature means and for the parsing of which version of Lua it is used.

 feature name                    | 5.1 | 5.2 | 5.3 | LuaJIT | 0.2.1 | 0.2.2 | 0.2.3 | 0.2.4 | description
---------------------------------|-----|-----|-----|--------|-------|-------|-------|-------|-------------
 noTrailingDotInHexNumeral       | x   |     |     |        |       |       |       |       | Lua &lt; 5.2 does not accept eg `0x.A`
 labels                          |     | x   | x   | x      | x     | x     | x     | x     | -
 emptyStatement                  |     | x   | x   |        | x     | x     | x     | x     | `;` is considered an empty statement
 hexEscapes                      |     | x   | x   | x      | x     | x     | x     | x     | `"\x42"`
 skipWhitespaceEscape            |     | x   | x   | x      | x     | x     | x     | x     | `"\z   "`
 strictEscapes                   |     | x   | x   | x      | x     | x     | x     | x     | raises an error on an unknown escape sequence
 relaxedBreak                    |     | x   | x   |        | x     | x     | x     | x     | `break` may not be the last statement in a block
 unicodeEscapes                  |     |     | x   | x      |       |       |       |       | `"\u{0042}"`
 bitwiseOperators                |     |     | x   |        | x     | x     | x     | x     | `~a`, `a | b`, `a & b`, `a << b` and `a >> b`
 integerDivision                 |     |     | x   |        |       |       |       |       | `a // b`
 contextualGoto                  |     |     |     | x      |       |       |       |       | -
 imaginaryNumbers                |     |     |     | x      |       |       |       |       | valid suffixes is `i` (case-insensitive)
 integerSuffixes                 |     |     |     | x      |       |       |       |       | valid suffixes are: `LL` and `ULL` (case-insensitive)
 strictP8FileFormat              |     |     |     |        | x     | x     | x     | x     | expects pico-8 header and section (eg `__lua__`)
 p8Sections                      |     |     |     |        | x     | x     | x     | x     | list of the section delimiters
 binLiteral                      |     |     |     |        | x     | x     | x     | x     | accepts eg `0b101010`
 noExponentLiteral               |     |     |     |        | x     | x     | x     | x     | does not accept eg `1e-1`
 singleLineIf                    |     |     |     |        | x     | x     | x     | x     | `if (a) print(a)`
 singleLineWhile                 |     |     |     |        | x     | x     | x     | x     | `while (a) print(a)`
 singleLinePrint                 |     |     |     |        | x     | x     | x     | x     | `?a`
 assignmentOperators             |     |     |     |        | x     | x     | x     | x     | `a += 1`
 traditionalNotEqual             |     |     |     |        | x     | x     | x     | x     | `a != b`
 traditionalComments             |     |     |     |        | x     | x     | x     | x     | `// this is a comment`
 noDeepLongStringComments        |     |     |     |        | x     | x     | x     | x     | `--[=[]=]` can not be a multiline comment
 bitshiftAdditionalOperators     |     |     |     |        | x     | x     | x     | x     | `a >>> b`, `a >>< b` and `a <<> b`
 peekPokeOperators               |     |     |     |        | x     | x     | x     | x     | `@a`, `%a` and `$a`
 backslashIntegerDivision        |     |     |     |        | x     | x     | x     | x     | integer division `//` is done with `\`
 smileyBitwiseXor                |     |     |     |        | x     | x     | x     | x     | `a ^^ b`
 p8scii                          |     |     |     |        |       | x     | x     | x     | additional string escape sequences
 singleLinePrintNoLineDependency |     |     |     |        |       |       | x     | x     | `a = 0 ?a`
 allowEmptySingleLineIf          |     |     |     |        |       |       | x     | x     | `if (a) ;`
 allowEmptySingleLineWhile       |     |     |     |        |       |       | x     | x     | `while (a) ;`
 allowAnyBeforeSingleLineIf      |     |     |     |        |       |       |       | x     | without, a blank or number must preceded a singleLineIf
 allowAnyBeforeSingleLineWhile   |     |     |     |        |       |       |       | x     | without, a blank or number must preceded a singleLinewhile

<br>

_the `strictP8FileFormat` feature can be disable with the option `ignoreStrictP8FileFormat`_
