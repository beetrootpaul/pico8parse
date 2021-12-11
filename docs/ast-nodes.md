Every AST node extends the following base:

```ts
type Base = {
    type: string;
    loc?: {
        start: {
            line: number;
            column: number;
        };
        end: {
            line: number;
            column: number;
        };
    };
    range?: [number, number];
};
```

The existing types are then:

 type                          | details
-------------------------------|---------
 "LabelStatement"              | `{ label: Identifier; }`
 "BreakStatement"              | `{ }`
 "GotoStatement"               | `{ label: Identifier; }`
 "ReturnStatement"             | `{ arguments: Expression[]; }`
 "IfStatement"                 | `{ clauses: IfStatementClauses; }`
 "IfClause"                    | `{ condition: Expression; body: Statement[]; }`
 "ElseifClause"                | `{ condition: Expression; body: Statement[]; }`
 "ElseClause"                  | `{ body: Statement[]; }`
 "WhileStatement"              | `{ condition: Expression; body: Statement[]; }`
 "DoStatement"                 | `{ body: Statement[]; }`
 "RepeatStatement"             | `{ condition: Expression; body: Statement[]; }`
 "LocalStatement"              | `{ variables: Identifier[]; init: Expression[]; }`
 "AssignmentStatement"         | `{ variables: Array<IndexExpression \| MemberExpression \| Identifier>; init: Expression[]; }`
 "AssignmentOperatorStatement" | `{ operator: BinaryOperator; variables: Array<IndexExpression \| MemberExpression \| Identifier>; init: Expression[]; }`
 "CallStatement"               | `{ expression: CallExpression \| StringCallExpression \| TableCallExpression; }`
 "FunctionDeclaration"         | `{ identifier: Identifier \| MemberExpression \| null; isLocal: boolean; parameters: Array<Identifier \| VarargLiteral>; body: Statement[]; }`
 "ForNumericStatement"         | `{ variable: Identifier; start: Expression; end: Expression; step: Expression \| null; body: Statement[]; }`
 "ForGenericStatement"         | `{ variables: Identifier[]; iterators: Expression[]; body: Statement[]; }`
 "Chunk"                       | `{ body: Statement[]; comments?: Comment[]; globals?: Identifier[]; }`
 "Identifier"                  | `{ name: string; isLocal?: boolean; }`
 "StringLiteral"               | `{ value: string; raw: string; rawInterrupted?: string; }`
 "NumericLiteral"              | `{ value: number; raw: string; }`
 "BooleanLiteral"              | `{ value: boolean; raw: string; }`
 "NilLiteral"                  | `{ value: null; raw: string; }`
 "VarargLiteral"               | `{ value: string; raw: string; }`
 "TableKey"                    | `{ key: Expression; value: Expression; }`
 "TableKeyString"              | `{ key: Identifier; value: Expression; }`
 "TableValue"                  | `{ value: Expression; }`
 "TableConstructorExpression"  | `{ fields: Array<TableKey \| TableKeyString \| TableValue>; }`
 "UnaryExpression"             | `{ operator: UnaryOperator; argument: Expression; }`
 "BinaryExpression"            | `{ operator: BinaryOperator \| ComparisonOperator; left: Expression; right: Expression; }`
 "LogicalExpression"           | `{ operator: 'or' \| 'and'; left: Expression; right: Expression; }`
 "MemberExpression"            | `{ indexer: '.' \| ':'; identifier: Identifier; base: Expression; }`
 "IndexExpression"             | `{ base: Expression; index: Expression; }`
 "CallExpression"              | `{ base: Expression; arguments: Expression[]; }`
 "TableCallExpression"         | `{ base: Expression; argument: Expression; }`
 "StringCallExpression"        | `{ base: Expression; argument: Expression; }`
 "Comment"                     | `{ value: string; raw: string; rawInterrupted?: string; }`
