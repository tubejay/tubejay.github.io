---
title     : "Font size"
layout    : single
toc       : true
permalink : /dev/github_pages/style/font/font_size
published : true
hidden    : false
---

<head>
  <base target="_blank">
</head>



## reference

- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes/discussions/1219#discussioncomment-172829)



## type-size-x

- in [🖌️main.scss](/dev/github_pages/start/setting/main_scss)
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



## medium/large/x-large

- in [🖌️main.scss](/dev/github_pages/start/setting/main_scss)
- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes/discussions/1219#discussioncomment-172827)

```scss
@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // skin
@import "minimal-mistakes"; // main partials

html {
  font-size: 15px;
  @include breakpoint($medium)  { font-size: 15px; }
  @include breakpoint($large)   { font-size: 16px; }
  @include breakpoint($x-large) { font-size: 17px; }
}
```
