---
title     : Build
layout    : single
toc       : true
permalink : /dev/github_pages/insert/code/build
published : true
hidden    : true
---

<head>
  <base target="_blank">
</head>



## setting

- in [config.yml](/dev/github_pages/start/setting/config_yml)
- [syntax highlight with Rouge](https://kramdown.gettalong.org/syntax_highlighter/rouge.html)

```yml
kramdown:
  syntax_highlighter: rouge
  syntax_highlighter_opts:
    default_lang : text
    guess_lang   : true
    block:
      disable      : false
      line_numbers : true
    span:
      disable      : false
      line_numbers : false
```
