
export function getTokenColours(text: ITextColours) {
    return {
        colours: [
            {
                "name": "Class - General",
                "scope": [
                    "support.class"
                ],
                "settings": {
                    "foreground": text.lightSecondary
                }
            },
            {
                "name": "Boolean - True",
                "scope": [
                    "constant.language.boolean.true"
                ],
                "settings": {
                    "foreground": text.lightBase
                }
            },
            {
                "name": "Alias",
                "scope": [
                    "variable.other.readwrite.alias"
                ],
                "settings": {
                    "foreground": text.tertiary
                }
            },
            {
                "name": "Parameter",
                "scope": [
                    "variable.parameter",
                    "meta.object-literal.key"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": text.secondary
                }
            },
            {
                "name": "Parameter Type",
                "scope": [
                    "entity.name.type",
                    "entity.name.type.module"
                ],
                "settings": {
                    "foreground": text.lightBase,
                }
            },
            {
                "name": "Boolean - False",
                "scope": [
                    "constant.language.boolean.false",
                    "constant.language.null"
                ],
                "settings": {
                    "foreground": text.alternate
                }
            },
            {
                "name": "Quoted",
                "scope": [
                    "string.quoted.single",
                    "string.quoted.double"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": text.lightComment
                }
            },
            {
                "name": "Comment - Block",
                "scope": [
                    "comment.block"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": text.darkComment
                }
            },
            {
                "name": "Comment - Singleline",
                "scope": [
                    "comment.line.double-slash"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": text.lightComment
                }
            },
            {
                "name": "Primitives",
                "scope": [
                    "support.type.primitive"
                ],
                "settings": {
                    "foreground": text.lightAlternate
                }
            },
            {
                "name": "Property",
                "scope": [
                    "variable.object.property"
                ],
                "settings": {
                    "foreground": text.alternate
                }
            },
            {
                "name": "Keyword",
                "scope": [
                    "keyword"
                ],
                "foreground": text.alternate
            },
            {
                "name": "String",
                "scope": [
                    "string",
                ],
                "settings": {
                    "foreground": text.lightAlternate
                }
            },
            {
                "name": "Constant",
                "scope": [
                    "variable.other.constant"
                ],
                "settings": {
                    "foreground": text.lightAlternate
                }
            },
            {
                "name": "Storage",
                "scope": [
                    "storage"
                ],
                "settings": {
                    "foreground": text.tertiary
                }
            },
            {
                "name": "Variables & Constants",
                "scope": [
                    "variable.other.constant",
                    "variable.other.property",
                    "variable.other.readwrite"
                ],
                "settings": { "foreground": text.lightSecondary }
            },
            {
                "name": "Import, From, As, Export - Italics",
                "scope": [
                    "keyword.control.import",
                    "keyword.control.from",
                    "keyword.control.as",
                    "keyword.control.export"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "Import, From, As, Export - Colour",
                "scope": [
                    "keyword.control.import",
                    "keyword.control.from",
                    "keyword.control.as"
                ],
                "settings": {
                    "foreground": text.lightAlternate
                }
            },
            {
                "name": "Operator - New, This",
                "scope": [
                    "keyword.operator.new",
                    "variable.language.this"
                ],
                "settings": {
                    "foreground": text.lightAlternate
                }
            },
            {
                "name": "Numbers",
                "scope": [
                    "constant.numeric"
                ],
                "settings": {
                    "foreground": text.secondary

                }
            },
            {
                "name": "Control",
                "scope": [
                    "keyword.control"
                ],
                "settings": {
                    "foreground": text.tertiary
                }
            },
            {
                "name": "Function Declaration",
                "scope": [
                    "storage.type.function"
                ],
                "settings": {
                    "foreground": text.tertiary
                }
            },
            {
                "name": "Name - Classes, Functions, Interfaces, Enums",
                "scope": [
                    "meta.return.type",
                    "entity.name.type.class",
                    "entity.name.type.function",
                    "entity.name.type.interface",
                    "entity.name.function",
                    "entity.name.type.enum",
                    "support.function.json"
                ],
                "settings": {
                    "foreground": text.secondary
                }
            },
            {
                "name": "Name - Objects",
                "scope": [
                    "variable.other.object",
                    "support.constant.json"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": text.alternate
                }
            },
            {
                "name": "Doc Tags",
                "scope": [
                    "meta.example.jsdoc"
                ],
                "settings": {
                    "foreground": text.lightBase
                }
            },
            {
                "name": "Doc Example - JSDOC",
                "scope": [
                    "source.embedded",
                    "storage.type.class.jsdoc",
                    "punctuation.definition.block.tag.jsdoc",

                ],
                "settings": {
                    "foreground": text.lightAlternate
                }
            }

        ]
    };
}