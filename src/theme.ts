import { TaskPanelKind } from "vscode";
import { getEditorColours } from "./getColourConfig";
import { getMainColours } from "./mainTheme";
import { getTokenColours } from "./textTheme";

export function getTheme(name: string) {

    const theme: ITheme = getEditorColours();

    const main = getMainColours(theme.editor);
    const tokens = getTokenColours(theme.text);

    return {
        name: name,
        colors: main.colours,
        tokenColors: tokens.colours
    };
}


