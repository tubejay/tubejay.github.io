---
title: Color
layout: single
toc: true
permalink: /dev/github_pages/style/color
published: true
hidden: false
---

## skins

- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes/tree/master/_sass/minimal-mistakes/skins)

```
$background-color
$form-background-color
$footer-background-color

$border-color

$code-background-color
$code-background-color-dark

$text-color
$muted-text-color

$link-color
$link-color-hover
$link-color-visited

$masthead-link-color
$masthead-link-color-hover

$navicon-link-color-hover

$primary-color
```



## basic

- in [main.scss](/dev/github_pages/style/customization#mainscss)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#colors)

### background

```scss
$body-color                   : black;
$background-color             : black;
```

### text

```scss
$text-color                   : white;

$link-color                   : #dbfffd;
$link-color-hover             : #FFFDDB;
$link-color-visited           : #FFDBFD;

$masthead-link-color          : #dbfffd;
$masthead-link-color-hover    : #FFFDDB;
```



## code

- in [main.scss](/dev/github_pages/style/customization#mainscss)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#syntax-highlighting)
- [base16](http://chriskempson.com/projects/base16/)

### background

```scss
$base00: #1d1f21; // base00 - Default Background
$base01: #282a2e; // base01 - Lighter Background (Used for status bars, line number and folding marks)
$base02: #3b3e44; // base02 - Selection Background
$base03: #999999; // base03 - Comments, Invisibles, Line Highlighting
$base04: #999999; // base04 - Dark Foreground (Used for status bars)
$base05: #ffffff; // base05 - Default Foreground, Caret, Delimiters, Operators
$base06: #ffffff; // base06 - Light Foreground (Not often used)
$base07: #ffffff; // base07 - Light Background (Not often used)
```

### text

```scss
$base08: #009900; // base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
$base09: #ff9933; // base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url
$base0a: #ffff66; // base0A - Classes, Markup Bold, Search Text Background
$base0b: #ff6666; // base0B - Strings, Inherited Class, Markup Code, Diff Inserted
$base0c: #00cc66; // base0C - Support, Regular Expressions, Escape Characters, Markup Quotes
$base0d: #33ccff; // base0D - Functions, Methods, Attribute IDs, Headings
$base0e: #66ffff; // base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed
$base0f: #a3685a; // base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
```
