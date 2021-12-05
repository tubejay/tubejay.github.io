---
title: Navigation
layout: single
toc: true
permalink: /dev/github_pages/view/navigation
published: true
hidden: false
---



## masthead

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/blog-menu/)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/navigation/#masthead)

### in [navigation.yml](/dev/github_pages/start/setting/navigation_yml)

```yml
main:
  - title : Home
    url   : /
  - title : Categories
    url   : /categories/
  - title : GitHub
    url   : https://github.com/
```

### output

![image](https://user-images.githubusercontent.com/92285528/144616497-f2047057-0f2c-44ee-a410-758426ec4506.png)



## nav_side

- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#custom-sidebar-navigation-menu)

### in [navigation.yml](/dev/github_pages/start/setting/navigation_yml)

```yml
nav_side:
  - title : Categories
    url   : /categories/
    children:
      - title : cat_A
        url   : /categories/cat_A/
      - title : cat_B
        url   : /categories/cat_B/
```

### in [front matter](/dev/github_pages/front_matter/scope)

```yml
sidebar:
  nav: nav_side
```

### output

![image](https://user-images.githubusercontent.com/92285528/144617063-faa1be73-4315-47e6-b43d-e2092bf4ae1f.png)
