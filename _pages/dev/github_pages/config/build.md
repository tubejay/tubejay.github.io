---
title: Build
layout: single
toc: true
permalink: /dev/github_pages/config/build
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## reading files

- in [⚙️config.yml](/dev/github_pages/start/setting/config_yml)

```yml
include:
  - .htaccess
  - _pages
exclude:
  - "*.sublime-project"
  - "*.sublime-workspace"
  - vendor
  - .asset-cache
  - .bundle
  - .jekyll-assets-cache
  - .sass-cache
  - assets/js/plugins
  - assets/js/_main.js
  - assets/js/vendor
  - Capfile
  - CHANGELOG
  - config
  - Gemfile
  - Gruntfile.js
  - gulpfile.js
  - LICENSE
  - log
  - node_modules
  - package.json
  - package-lock.json
  - Rakefile
  - README
  - tmp
  - /docs # ignore Minimal Mistakes /docs
  - /test # ignore Minimal Mistakes /test
keep_files:
  - .git
  - .svn
encoding: "utf-8"
markdown_ext: "markdown,mkdown,mkdn,mkd,md"
```



## plugins

- in [⚙️config.yml](/dev/github_pages/start/setting/config_yml)
- [dependency versions](https://pages.github.com/versions/)

```yml
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache
whitelist:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache
```



## conversion

- in [⚙️config.yml](/dev/github_pages/start/setting/config_yml)

```yml
markdown          : kramdown
highlighter       : rouge
lsi               : false
excerpt_separator : "\n\n"
incremental       : false
```



## markdown processing

- in [⚙️config.yml](/dev/github_pages/start/setting/config_yml)

```yml
kramdown:
  input           : GFM
  hard_wrap       : false
  auto_ids        : true
  footnote_nr     : 1
  entity_output   : as_char
  toc_levels      : 1..6
  smart_quotes    : lsquo,rsquo,ldquo,rdquo
  enable_coderay  : false
```
