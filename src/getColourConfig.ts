import * as fs from 'fs';
import * as path from 'path';
import * as paths from './config/config.json';

function getPaths(): IThemePaths {
    return paths;
}

function convertJson<Type extends IThemeColours>(themepath: string): Type {
    const data = fs.readFileSync(path.resolve(__dirname, '../src', themepath), { encoding: 'utf8', flag: 'r' });
    let colours: Type = JSON.parse(data);
    return colours;
}

export function getEditorColours(): ITheme {

    let themePaths = getPaths();

    let colours = convertJson<IColours>(themePaths.colours);
    let editor = convertJson<IEditorColours>(themePaths.editor);
    let text = convertJson<ITextColours>(themePaths.text);

    let editorTheme = convertColours(editor, colours);
    let textTheme = convertColours(text, colours);

    return { editor: editorTheme, text: textTheme, colours: colours };
}

function convertColours<Type extends IThemeColours>(input: Type, colours: IColours): Type {
    let entries = Object.entries(input) as [string, string][];
    let map = Object.entries(colours) as [string, string][];

    entries.map((f => {
        let val = map.find(c => c[0] === f[1]);
        if (val !== undefined) {
            console.log("REPLACE: ", f[1], " WITH: ", val[1]);
            f[1] = val[1];
        }
    }));
    return Object.fromEntries(entries) as unknown as Type;
}



