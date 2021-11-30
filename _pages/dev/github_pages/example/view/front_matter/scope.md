---
title: Scope
layout: single
toc: true
permalink: /dev/github_pages/example/view/front_matter/scope
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
      read_time  : false
      comments   : false
      share      : false
      related    : false
      show_date  : false
      toc_sticky : true
      toc_label  : "Table of Contents"
      sidebar:
        nav: nav_side
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout         : single
      author_profile : false
      toc            : true
  # _pages
  - scope:
      path: ""
      type: pages
    values:
      layout         : splash
      author_profile : true
      toc            : false
```



## document

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
