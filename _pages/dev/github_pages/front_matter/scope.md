---
title: Scope
layout: single
toc: true
permalink: /dev/github_pages/front_matter/scope
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## default

- in [config](/dev/github_pages#config)
- scope
  - global
  - posts
  - pages
- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/blog-config/#9-_posts-_pages-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#front-matter-defaults)
- [Jekyll](https://jekyllrb.com/docs/configuration/front-matter-defaults/)

```yml
defaults:
  # global
  - scope:
      path: ""
    values:
      # info
      show_date : false
      read_time : false
      share     : false
      related   : false
      comments  : false
      # table of contents
      toc_sticky : true
      toc_label  : "Table of Contents"
      toc_icon   : list-alt
      # view
      sidebar:
        nav: nav_side
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      # info
      author_profile : false
      # table of contents
      toc : true
      # view
      layout : single
  # _pages
  - scope:
      path: ""
      type: pages
    values:
      # info
      author_profile : true
      # table of contents
      toc : false
      # view
      layout : splash
```



## document

- in [document](/dev/github_pages#document)

```yml
---
date       : 2021-01-01
title      : post_A_1
categories : cat_A
permalink  : 
published  : true
hidden     : false
---
```
