---
title: Font
layout: single
toc: true
permalink: /dev/github_pages/style/font
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## font-family

### font stack

- in [main.scss](/dev/github_pages/style/customization#mainscss)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#font-stacks)

```scss
$serif      : Georgia
$sans-serif : Roboto
$monospace  : Consolas

$global-font-family : $sans-serif;
$header-font-family : $sans-serif;
```

### web font

#### reference

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/set-font/)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#typography-from-older-versions)
- [Google Fonts - IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono?query=ibm+plex+mono)

#### example

- in [custom.html](/dev/github_pages/style/customization#customhtml)

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap" rel="stylesheet">
```

- in [main.scss](/dev/github_pages/style/customization#mainscss)

```scss
$sans-serif : "IBM Plex Mono"
```



## font-size

### type-size-8


- in [main.scss](/dev/github_pages/style/customization#mainscss)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#type-scale)

```scss
$type-size-1 : 2.00em;
$type-size-2 : 1.75em;
$type-size-3 : 1.50em;
$type-size-4 : 1.25em; 
$type-size-5 : 1.00em;    
$type-size-6 : 0.80em; 
$type-size-7 : 0.60em;
$type-size-8 : 0.40em;
```

### x-large

- in [main.scss](/dev/github_pages/style/customization#mainscss)
- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes/discussions/1219)



## code

- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/markup-syntax-highlighting/#gfm-code-blocks)
