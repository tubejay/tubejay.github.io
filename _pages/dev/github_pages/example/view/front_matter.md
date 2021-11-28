---
title: "front matter"
layout: single
toc: true
permalink: /dev/github_pages/example/view/front_matter
published: true
hidden: false
---



## type

### default

- in [config](/dev/github_pages#config)
- scope
  - global
  - posts
  - pages

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

- in [document](/dev/github_pages#document)

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

### author_profile

- true/false
- in [site author](/dev/github_pages/example/config/setting/info#site-author)

### show_date

- true/false

### read_time

- true/false
- words_per_minute in [site settings](/dev/github_pages/example/config/setting/info#site-settings)

### share

- true/false

### related

- true/false

### comments

- true/false
- in [comments](/dev/github_pages/example/config/setting/tool#comments)



## table of contents

### toc

- true/false

### toc_sticky

- true/false

### toc_label

- toc_label: "Table of Contents"



## document

### date

- YYYY-MM-DD

### title

- word
- "two or more words"

### categories

- category_name

### permalink

### published

- true/false

### hidden

- true/false

