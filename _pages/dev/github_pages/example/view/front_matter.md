---
title: "front matter"
layout: single
toc: false
permalink: /dev/github_pages/example/config/setting/front_matter_defaults_view
published: true
hidden: false
---



## default / document

### default

- in [config](/dev/github_pages#config)

```yml
defaults:
  # global
  - scope:
      path: ""
    values:
      read_time: false
      comments: false
      share: false
      related: false
      show_date: false
      toc_sticky: true
      toc_label: "Table of Contents"
      sidebar:
        nav: nav_side
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: false
      toc: true
  # _pages
  - scope:
      path: ""
      type: pages
    values:
      layout: splash
      author_profile: true
      toc: false
```

### document

- in document

```yml
---
date: 2021-01-01
title: post_A_1
categories: cat_A
published: true
hidden: false
---
```



## info

### author profile

### show_date

### read_time

- words_per_minute in config

### share

### related



## table of contents

### toc

### toc_sticky

### toc_label



## [layout](/dev/github_pages/example/layouts)

- home
- single
- splash
- wide
- categories
- category

## [navigation](/dev/github_pages/example/navigation)

- create navigation.yml
- masthead
- nav_side

## comments

- true/false
- [config](/dev/github_pages/example/config/setting/tool)

## in document

- date / title
- categories / permalink
- published / hidden



