interface IThemePaths {
    colours: string;
    editor: string;
    text: string;
}

interface ITheme {
    colours: IColours;
    editor: IEditorColours;
    text: ITextColours;
}

interface IThemeColours {
    "name": string;
}

interface IEditorColours extends IThemeColours {
    background: string;
    activeBackground: string;
    border: string;
    activeBorder: string;
    shadow: string;
    icon: string;
    highlight: string;
    activeHighlight: string;
    prominent: string;
    selection: string;
    error: string;
    text: string;
}


interface ITextColours extends IThemeColours {
    base: string;
    lightBase: string;
    primary: string;
    lightPrimary: string;
    secondary: string;
    lightSecondary: string;
    tertiary: string;
    lightTertiary: string;
    alternate: string;
    lightAlternate: string;
    lightComment: string;
    darkComment: string;
    error: string;
    warning: string;
    info: string;

}

interface IColours extends IThemeColours {
    black: string;
    white: string;
    gray: string;
    darkGray: string;
    red: string;
    pink: string;
    magenta: string;
    lightPurple: string;
    purple: string;
    darkPurple: string;
    indigo: string;
    blue: string;
    lightBlue: string;
    cyan: string;
    teal: string;
    green: string;
    lightGreen: string;
    darkGreen: string;
    lightYellow: string;
    yellow: string;
    orange: string;
    darkOrange: string;
    brown: string;
}