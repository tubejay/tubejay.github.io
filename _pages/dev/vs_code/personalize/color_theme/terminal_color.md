---
title: "Terminal color"
layout: single
toc: true
permalink: /dev/vs_code/personalize/color_theme/terminal_color
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## reference

- [documentation](https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors)
- [frhyme.code](https://frhyme.github.io/vs-code/vs_code_terminal_theme/)
- [Base16 Terminal Colors for Visual Studio Code](https://glitchbone.github.io/vscode-base16-term/#/)



## in setting.json

```json
{
    "workbench.colorCustomizations": {
        "terminal.background"           :"#151718",
        "terminal.foreground"           :"#D6D6D6",
        "terminalCursor.background"     :"#D6D6D6",
        "terminalCursor.foreground"     :"#D6D6D6",
        "terminal.ansiBlack"            :"#151718",
        "terminal.ansiBlue"             :"#55B5DB",
        "terminal.ansiBrightBlack"      :"#41535B",
        "terminal.ansiBrightBlue"       :"#55B5DB",
        "terminal.ansiBrightCyan"       :"#55DBBE",
        "terminal.ansiBrightGreen"      :"#9FCA56",
        "terminal.ansiBrightMagenta"    :"#A074C4",
        "terminal.ansiBrightRed"        :"#CD3F45",
        "terminal.ansiBrightWhite"      :"#FFFFFF",
        "terminal.ansiBrightYellow"     :"#E6CD69",
        "terminal.ansiCyan"             :"#55DBBE",
        "terminal.ansiGreen"            :"#9FCA56",
        "terminal.ansiMagenta"          :"#A074C4",
        "terminal.ansiRed"              :"#CD3F45",
        "terminal.ansiWhite"            :"#D6D6D6",
        "terminal.ansiYellow"           :"#E6CD69"
    }
}
```



## colors

```
terminal.tab.activeBorder       : Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
terminal.border                 : The color of the border that separates split panes within the terminal. This defaults to panel.border.

terminal.background             : The background of the Integrated Terminal's viewport.
terminalCursor.background       : The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
terminal.selectionBackground    : The selection background color of the terminal.
terminal.dropBackground         : The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.

terminal.foreground             : The default foreground color of the Integrated Terminal.
terminalCursor.foreground       : The foreground color of the terminal cursor.

terminal.ansiBrightBlack        : 'BrightBlack' ANSI color in the terminal.
terminal.ansiBlack              : 'Black' ANSI color in the terminal.

terminal.ansiBrightWhite        : 'BrightWhite' ANSI color in the terminal.
terminal.ansiWhite              : 'White' ANSI color in the terminal.

terminal.ansiBrightRed          : 'BrightRed' ANSI color in the terminal.
terminal.ansiRed                : 'Red' ANSI color in the terminal.

terminal.ansiBrightMagenta      : 'BrightMagenta' ANSI color in the terminal.
terminal.ansiMagenta            : 'Magenta' ANSI color in the terminal.

terminal.ansiBrightYellow       : 'BrightYellow' ANSI color in the terminal.
terminal.ansiYellow             : 'Yellow' ANSI color in the terminal.

terminal.ansiBrightGreen        : 'BrightGreen' ANSI color in the terminal.
terminal.ansiGreen              : 'Green' ANSI color in the terminal.

terminal.ansiBrightCyan         : 'BrightCyan' ANSI color in the terminal.
terminal.ansiCyan               : 'Cyan' ANSI color in the terminal.

terminal.ansiBrightBlue         : 'BrightBlue' ANSI color in the terminal.
terminal.ansiBlue               : 'Blue' ANSI color in the terminal.
```
