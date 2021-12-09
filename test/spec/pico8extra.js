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
}(this, 'pico8extra', function (exports) {
  'use strict';

  exports.name = 'pico8extra';
  exports.spec = [
    {
      "source": "?a,1,2",
      "result": "[1:1] unexpected symbol '?' near '<bof>'"
    },
    {
      "source": "?\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              },
              "range": [
                0,
                0
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "range": [
          0,
          0
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?\"coucou\"\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "StringLiteral",
                  "value": null,
                  "raw": "\"coucou\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 9
                    }
                  },
                  "range": [
                    1,
                    9
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 1
                }
              },
              "range": [
                0,
                1
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1
          }
        },
        "range": [
          0,
          1
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "? \"coucou\"\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "StringLiteral",
                  "value": null,
                  "raw": "\"coucou\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 10
                    }
                  },
                  "range": [
                    2,
                    10
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 2
                }
              },
              "range": [
                0,
                2
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 2
              }
            },
            "range": [
              0,
              2
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 2
          }
        },
        "range": [
          0,
          2
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?a\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 2
                    }
                  },
                  "range": [
                    1,
                    2
                  ],
                  "isLocal": false
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 1
                }
              },
              "range": [
                0,
                1
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1
          }
        },
        "range": [
          0,
          1
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 1
              },
              "end": {
                "line": 1,
                "column": 2
              }
            },
            "range": [
              1,
              2
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?a",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 2
                    }
                  },
                  "range": [
                    1,
                    2
                  ],
                  "isLocal": false
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 1
                }
              },
              "range": [
                0,
                1
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1
          }
        },
        "range": [
          0,
          1
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 1
              },
              "end": {
                "line": 1,
                "column": 2
              }
            },
            "range": [
              1,
              2
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?\na",
      "result": "[2:1] '=' expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "a()\n?a\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 1
                  }
                },
                "range": [
                  0,
                  1
                ],
                "isLocal": false
              },
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                0,
                3
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              0,
              3
            ]
          },
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 0
                  },
                  "end": {
                    "line": 2,
                    "column": 0
                  }
                },
                "range": [
                  4,
                  4
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 1
                    },
                    "end": {
                      "line": 2,
                      "column": 2
                    }
                  },
                  "range": [
                    5,
                    6
                  ],
                  "isLocal": false
                }
              ],
              "loc": {
                "start": {
                  "line": 2,
                  "column": 0
                },
                "end": {
                  "line": 2,
                  "column": 1
                }
              },
              "range": [
                4,
                5
              ]
            },
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 1
              }
            },
            "range": [
              4,
              5
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 1
          }
        },
        "range": [
          0,
          5
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 0
              }
            },
            "range": [
              4,
              4
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "a() ?a",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?a a()",
      "result": "[1:3] ')' expected near 'a'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?a,\nb",
      "result": "[1:4] <expression> expected near ')'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?(a)\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ],
                  "isLocal": false
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                0,
                3
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              0,
              3
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 3
          }
        },
        "range": [
          0,
          3
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 2
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              2,
              3
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?a,c\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 2
                    }
                  },
                  "range": [
                    1,
                    2
                  ],
                  "isLocal": false
                },
                {
                  "type": "Identifier",
                  "name": "c",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 3
                    },
                    "end": {
                      "line": 1,
                      "column": 4
                    }
                  },
                  "range": [
                    3,
                    4
                  ],
                  "isLocal": false
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                0,
                3
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              0,
              3
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 3
          }
        },
        "range": [
          0,
          3
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 1
              },
              "end": {
                "line": 1,
                "column": 2
              }
            },
            "range": [
              1,
              2
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 3
              },
              "end": {
                "line": 1,
                "column": 4
              }
            },
            "range": [
              3,
              4
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?a,x,y,c\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 2
                    }
                  },
                  "range": [
                    1,
                    2
                  ],
                  "isLocal": false
                },
                {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 3
                    },
                    "end": {
                      "line": 1,
                      "column": 4
                    }
                  },
                  "range": [
                    3,
                    4
                  ],
                  "isLocal": false
                },
                {
                  "type": "Identifier",
                  "name": "y",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 5
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    5,
                    6
                  ],
                  "isLocal": false
                },
                {
                  "type": "Identifier",
                  "name": "c",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 8
                    }
                  },
                  "range": [
                    7,
                    8
                  ],
                  "isLocal": false
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "range": [
                0,
                7
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 7
              }
            },
            "range": [
              0,
              7
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 7
          }
        },
        "range": [
          0,
          7
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 1
              },
              "end": {
                "line": 1,
                "column": 2
              }
            },
            "range": [
              1,
              2
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "x",
            "loc": {
              "start": {
                "line": 1,
                "column": 3
              },
              "end": {
                "line": 1,
                "column": 4
              }
            },
            "range": [
              3,
              4
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "y",
            "loc": {
              "start": {
                "line": 1,
                "column": 5
              },
              "end": {
                "line": 1,
                "column": 6
              }
            },
            "range": [
              5,
              6
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              7,
              8
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?(a,c)",
      "result": "[1:3] ')' expected near ','",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "?(a),(c)\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                },
                "range": [
                  0,
                  0
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ],
                  "isLocal": false
                },
                {
                  "type": "Identifier",
                  "name": "c",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 6
                    },
                    "end": {
                      "line": 1,
                      "column": 7
                    }
                  },
                  "range": [
                    6,
                    7
                  ],
                  "isLocal": false
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "range": [
                0,
                7
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 7
              }
            },
            "range": [
              0,
              7
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 7
          }
        },
        "range": [
          0,
          7
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            },
            "range": [
              0,
              0
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 2
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              2,
              3
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 6
              },
              "end": {
                "line": 1,
                "column": 7
              }
            },
            "range": [
              6,
              7
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "a = 1 ?a",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "a = 2; ?a",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "(?a)",
      "result": "[1:4] unexpected symbol near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "(?a\n)",
      "result": "[2:1] unexpected symbol near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    },
    {
      "source": "\n?a\n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "print",
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 0
                  },
                  "end": {
                    "line": 2,
                    "column": 0
                  }
                },
                "range": [
                  1,
                  1
                ],
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 1
                    },
                    "end": {
                      "line": 2,
                      "column": 2
                    }
                  },
                  "range": [
                    2,
                    3
                  ],
                  "isLocal": false
                }
              ],
              "loc": {
                "start": {
                  "line": 2,
                  "column": 0
                },
                "end": {
                  "line": 2,
                  "column": 1
                }
              },
              "range": [
                1,
                2
              ]
            },
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 1
              }
            },
            "range": [
              1,
              2
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 1
          }
        },
        "range": [
          1,
          2
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 0
              }
            },
            "range": [
              1,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 2,
                "column": 1
              },
              "end": {
                "line": 2,
                "column": 2
              }
            },
            "range": [
              2,
              3
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
        "luaVersion": "PICO-8-0.2.1",
        "ignoreStrictP8FileFormat": true
      }
    }
  ];
}));
