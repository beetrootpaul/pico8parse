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
      "source": "pico-8 cartridge\n\ncontent",
      "result": "[1:4] '=' expected near '-'"
    },
    {
      "source": "pico-8 cartridge\n\ncontent",
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
      "source": " pico-8 cartridge\n\ncontent",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 26
          },
          "end": {
            "line": 1,
            "column": 26
          }
        },
        "range": [
          26,
          26
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
      "source": "blablapico-8 cartridgeblabla\n\ncontent",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 37
          },
          "end": {
            "line": 1,
            "column": 37
          }
        },
        "range": [
          37,
          37
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
      "source": "pico-8 cartridg\n\ncontent",
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
      "source": "pico 8 cartridge\n\ncontent",
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
      "source": "pico-8 cartridge\n\n__gfx__\ninvalid lua",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 4,
            "column": 11
          },
          "end": {
            "line": 4,
            "column": 11
          }
        },
        "range": [
          37,
          37
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
      "source": "pico-8 cartridge\n\n__lua__\ninvalid lua",
      "result": "[4:8] '=' expected near 'lua'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n\n__lua__invalid lua\n",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 4,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "range": [
          37,
          37
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
      "source": "pico-8 cartridge\n\n__lua__\na = \n__gfx__\n__lua__",
      "result": "[6:7] <expression> expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n\n__lua__\na = \n__gfx__\n__lua__\n0",
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
                    "line": 4,
                    "column": 0
                  },
                  "end": {
                    "line": 4,
                    "column": 1
                  }
                },
                "range": [
                  26,
                  27
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
                    "line": 7,
                    "column": 0
                  },
                  "end": {
                    "line": 7,
                    "column": 1
                  }
                },
                "range": [
                  47,
                  48
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 4,
                "column": 0
              },
              "end": {
                "line": 7,
                "column": 1
              }
            },
            "range": [
              26,
              48
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 4,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 1
          }
        },
        "range": [
          26,
          48
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 4,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 1
              }
            },
            "range": [
              26,
              27
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
    },
    {
      "source": "pico-8 cartridge\n__lua__\na = \n__lua__\n0",
      "result": "[5:0] unexpected number '0' near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n__lua__\na = [[\n__gfx__]]\n__lua__\n]]",
      "result": "[6:0] unexpected symbol ']' near ']'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n\n__lua__\na = [[\n__gfx__]]\n__lua__\n]]",
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
                    "line": 4,
                    "column": 0
                  },
                  "end": {
                    "line": 4,
                    "column": 1
                  }
                },
                "range": [
                  26,
                  27
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": null,
                "raw": "[[\n__gfx__]]\n__lua__\n]]",
                "rawInterrupted": "[[]]",
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 4
                  },
                  "end": {
                    "line": 7,
                    "column": 2
                  }
                },
                "range": [
                  30,
                  53
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 4,
                "column": 0
              },
              "end": {
                "line": 7,
                "column": 2
              }
            },
            "range": [
              26,
              53
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 4,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 2
          }
        },
        "range": [
          26,
          53
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 4,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 1
              }
            },
            "range": [
              26,
              27
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
    },
    {
      "source": "pico-8 cartridge\n\n__lua__\na = [[\n __gfx__]]\n__lua__\n]]",
      "result": "[7:0] unexpected symbol ']' near ']'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8"
      }
    },
    {
      "source": "pico-8 cartridge\n\n__lua__\n--[[\n__gfx__]]\n__lua__\n]]",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 7,
            "column": 2
          },
          "end": {
            "line": 7,
            "column": 2
          }
        },
        "range": [
          51,
          51
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "",
            "raw": "--[[\n__gfx__]]\n__lua__\n]]",
            "rawInterrupted": "--[[]]",
            "loc": {
              "start": {
                "line": 4,
                "column": 0
              },
              "end": {
                "line": 7,
                "column": 2
              }
            },
            "range": [
              26,
              51
            ]
          }
        ],
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
      "source": "pico-8 cartridge\n\n__lua__\n--[[\n __gfx__]]\n__lua__\n]]",
      "result": "[7:0] unexpected symbol ']' near ']'",
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
