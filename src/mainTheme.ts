
export function getMainColours(editor: IEditorColours) {
    return {
        colours: {
            //Base Colours
            "focusBorder": editor.border,
            "foreground": editor.text,
            "widget.shadow": editor.border,
            "selection.background": editor.activeBackground,
            "descriptionForeground": editor.text,
            "errorForeground": editor.activeBackground,
            "icon.foreground": editor.icon,
            "sash.hoverBorder": editor.border,

            //Window Border
            "window.activeBorder": editor.activeBorder,
            "window.inactiveBorder": editor.border,

            //Default Text Colors
            "textBlockQuote.background": editor.background,
            "textBlockQuote.border": editor.border,

            "textCodeBlock.background": editor.border,

            "textLink.activeforeground": editor.text,
            "textLink.foreground": editor.highlight,

            //Action Colors
            "toolbar.hoverBackground": editor.border,
            "toolbar.hoverOutline": editor.border,
            "toolbar.activeBackground": editor.activeBackground,

            //Button Control
            "button.background": editor.highlight,
            "button.foreground": editor.background,

            //Dropdown Control
            "dropdown.background": editor.background,
            "dropdown.listBackground": editor.activeBackground,
            "dropdown.border": editor.activeBackground,
            "dropdown.foreground": editor.text,

            //Input Control
            "input.background": editor.background,
            "input.border": editor.activeBackground,
            "input.foreground": editor.text,
            "input.placeholderForeground": editor.text,

            //Editor
            "editor.background": editor.background,
            "editor.selectionBackground": editor.background,
            "editor.selectionHighlightBackground": editor.activeBackground,
            "editor.wordHighlightBackground": editor.activeBackground,
            "editor.lineHighlightBackground": editor.activeBackground,

            "editor.foreground": editor.text,
            "editor.selectionForeground": editor.activeBackground,
            "editorLineNumber.foreground": editor.highlight,
            "editorLineNumber.activeForeground": editor.activeHighlight,

            "editor.selectionHighlightBorder": editor.border,

            "editorCursor.foreground": editor.activeHighlight,
            "editorCursor.background": editor.background,

            //Editor Gutter contains the glyph margins and the line numbers
            "editorGutter.background": editor.background,
            "editorGutter.modifiedBackground": editor.activeBackground,


            //Sidebar
            "sideBar.foreground": editor.text,
            "sideBarTitle.foreground": editor.text,
            "sideBarSectionHeader.foreground": editor.text,
            "sideBar.background": editor.background,
            "sideBarSectionHeader.background": editor.background,
            "sideBar.border": editor.border,
            "sideBarSectionHeader.border": editor.border,

            //Activity Bar
            "activityBar.background": editor.background,
            "activityBar.dropBorder": editor.border,
            "activityBar.foreground": editor.text,
            "activityBar.activeBorder": editor.activeBackground,
            "activityBar.activeBackground": editor.background,
            "activityBar.activeFocusBorder": editor.border,
            "activityBar.inactiveForeground": editor.text,
            "activityBarBadge.background": editor.background,
            "activityBarBadge.foreground": editor.text,

            //Badge
            "badge.foreground": editor.text,
            "badge.background": editor.activeHighlight,

            //Scrollbar
            "scrollbarSlider.background": editor.activeBackground,

            //Progress Bar
            "progressBar.background": editor.background,

            //Editor Groups & Tabs
            "editorGroup.border": editor.border,
            "editorGroup.dropBackground": editor.background,
            "editorGroup.emptyBackground": editor.background,
            "editorGroup.focusedEmptyBorder": editor.border,

            "editorGroupHeader.tabsBackground": editor.background,
            "editorGroupHeader.tabsBorder": editor.border,
            "editorGroupHeader.border": editor.border,
            "editorGroupHeader.noTabsBackground": editor.border,

            "tab.activeBackground": editor.border,
            "tab.inactiveBackground": editor.background,
            "tab.unfocusedActiveBackground": editor.background,
            "tab.unfocusedInactiveBackground": editor.background,
            "tab.hoverBackground": editor.background,

            "tab.activeForeground": editor.text,
            "tab.inactiveForeground": editor.shadow,
            "tab.unfocusedActiveForeground": editor.shadow,
            "tab.unfocusedInactiveForeground": editor.prominent,
            "tab.hoverForeground": editor.text,
            "tab.unfocusedHoverForeground": editor.text,

            "tab.border": editor.border,
            "tab.activeBorder": editor.border,
            "tab.hoverBorder": editor.border,
            "tab.unfocusedHoverBorder": editor.border,
            "tab.activeModifiedBorder": editor.border,
            "tab.inactiveModifiedBorder": editor.border,
            "tab.unfocusedActiveModifiedBorder": editor.border,
            "tab.unfocusedInactiveModifiedBorder": editor.border,

            "editorPane.background": editor.background,

            //Editor Widget Colours
            "editorWidget.foreground": editor.text,

            //Errors and Warnings
            "editorError.foreground": editor.text,
            "editorError.background": editor.background,
            "editorError.info": editor.border,

            "editorWarning.foreground": editor.text,
            "editorWarning.background": editor.background,
            "editorWarning.border": editor.border,

            "editorInfo.foreground": editor.text,
            "editorInfo.background": editor.background,
            "editorInfo.border": editor.border,

            "editorHint.foreground": editor.text,
            "editorHint.border": editor.activeBackground,

            "problemsErrorIcon.foreground": editor.activeBackground,
            "problemsWarningIcon.foreground": editor.icon,
            "problemsInfoIcon.foreground": editor.text,

            //Status Bar
            "statusBar.background": editor.highlight,
            "statusBar.foreground": editor.activeBackground,
            "statusBar.prominentForeground": editor.activeBackground,

            //Title Bar
            "titleBar.activeBackground": editor.border,
            "titleBar.activeForeground": editor.text,
            "titleBar.inactiveBackground": editor.background,
            "titleBar.inactiveForeground": editor.activeBackground,
            "titleBar.border": editor.background,

            //Terminal Colours
            "terminal.background": editor.background,
            "terminal.border": editor.activeBackground,
            "terminal.foreground": editor.text,
            "terminalCursor.background": editor.background,
            "terminalCursor.foreground": editor.activeBackground,

            /*
            * Peek View
           */
            "peekView.border": editor.activeBackground,
            "peekViewEditor.background": editor.background,

            /*
            * Panel Colours
           * Panels are shown below the editor are and contain view like OUtput and Integrated Terminal
           */
            "panel.background": editor.background,
            "panel.border": editor.activeBackground,

            //Menu Bar
            "menubar.selectionForeground": editor.text,
            "menubar.selectionBackground": editor.background,
            "menubar.border": editor.border,

            //Notifications
            "notificationCenter.border": editor.border,
            "notifications.foreground": editor.text,
            "notifications.background": editor.background,

            //Welcome Page Colors
            "welcomePage.background": editor.background,
            "welcomePage.buttonBackground": editor.activeHighlight,
        }
    };
}
