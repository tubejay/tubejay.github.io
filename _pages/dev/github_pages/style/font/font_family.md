---
title     : "Font family"
layout    : single
toc       : true
permalink : /dev/github_pages/style/font/font_family
published : true
hidden    : false
---

<head>
  <base target="_blank">
</head>



## font stack

- in [main.scss](/dev/github_pages/start/setting/main_scss)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#font-stacks)

```scss
$serif      : Georgia
$sans-serif : Roboto
$monospace  : Consolas

$global-font-family : $sans-serif;
$header-font-family : $sans-serif;
```



## web font

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/set-font/)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#typography-from-older-versions)
- [Google Fonts - IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono?query=ibm+plex+mono)

### in [custom.html](/dev/github_pages/start/setting/custom_html)

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap" rel="stylesheet">
```

### in [main.scss](/dev/github_pages/start/setting/main_scss)

```scss
$sans-serif : "IBM Plex Mono"
```
