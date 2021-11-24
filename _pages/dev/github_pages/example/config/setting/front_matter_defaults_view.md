---
title: "front matter defaults -> view"
layout: single
toc: false
permalink: /dev/github_pages/example/config/setting/front_matter_defaults_view
published: true
hidden: false
---



- [layouts](/dev/github_pages/example/layouts)

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
