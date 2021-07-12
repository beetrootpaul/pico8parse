(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports === freeExports && module
    , freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;

  if (typeof define === 'function' && define.amd) define(['exports'], factory);
  else if (freeExports && !freeExports.nodeType) {
    if (freeModule) factory(freeModule.exports);
    else factory(freeExports);
  }
  else factory((root[name] = {}));
}(this, 'pico8fileformat', function (exports) {
  'use strict';

  exports.name = 'pico8fileformat';
  exports.spec = [
    {
      "source": "pico-8 cartridge\ncontent",
      "result": "[1:4] '=' expected near '-'"
    },
    {
      "source": "pico-8 cartridge\ncontent",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 24
          },
          "end": {
            "line": 1,
            "column": 24
          }
        },
        "range": [
          24,
          24
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": " pico-8 cartridge\ncontent",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 25
          },
          "end": {
            "line": 1,
            "column": 25
          }
        },
        "range": [
          25,
          25
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "blablapico-8 cartridgeblabla\ncontent",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 36
          },
          "end": {
            "line": 1,
            "column": 36
          }
        },
        "range": [
          36,
          36
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridg\ncontent",
      "result": "[1:0] 'pico-8 cartridge' expected near '<bof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico 8 cartridge\ncontent",
      "result": "[1:0] 'pico-8 cartridge' expected near '<bof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n__gfx__\ninvalid lua",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 3,
            "column": 11
          },
          "end": {
            "line": 3,
            "column": 11
          }
        },
        "range": [
          36,
          36
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n__lua__\ninvalid lua",
      "result": "[3:8] '=' expected near 'lua'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n__lua__invalid lua\n",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 3,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "range": [
          36,
          36
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n__lua__\na = \n__gfx__\n__lua__",
      "result": "[5:7] <expression> expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n__lua__\na = \n__gfx__\n__lua__\n0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 3,
                    "column": 0
                  },
                  "end": {
                    "line": 3,
                    "column": 1
                  }
                },
                "range": [
                  25,
                  26
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 0,
                "raw": "0",
                "loc": {
                  "start": {
                    "line": 6,
                    "column": 0
                  },
                  "end": {
                    "line": 6,
                    "column": 1
                  }
                },
                "range": [
                  46,
                  47
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 6,
                "column": 1
              }
            },
            "range": [
              25,
              47
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 3,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 1
          }
        },
        "range": [
          25,
          47
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 3,
                "column": 1
              }
            },
            "range": [
              25,
              26
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    }
  ];
}));
