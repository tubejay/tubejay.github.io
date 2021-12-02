---
title: Organize
layout: single
toc: true
permalink: /dev/github_pages/config/setting/organize
published: true
hidden: false
---



## outputting

```yml
permalink: /:categories/:title/
paginate: 5 # amount of posts to show
paginate_path: /page:num/
timezone: # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
```



## archives

```yml
category_archive:
  type: liquid
  path: /categories/
tag_archive:
  type: liquid
  path: /tags/
```



## breadcrumbs
  
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/navigation/#breadcrumbs-beta)

```yml
# breadcrumbs            : false # true, false (default)
```
