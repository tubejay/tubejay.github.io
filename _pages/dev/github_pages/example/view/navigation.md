---
title: Navigation
layout: single
toc: true
permalink: /dev/github_pages/example/view/navigation
published: true
hidden: false
---



## Create

![image](https://user-images.githubusercontent.com/92285528/143728088-5d60a93d-4768-44ca-b048-9618a1d8d33c.png)



## Masthead

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/blog-menu/)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/navigation/#masthead)

### in [navigation.yml](/dev/github_pages/example/view/navigation#create)

```yml
main:
  - title: Home
    url: /
  - title: Categories
    url: /categories/
  - title: GitHub
    url: https://github.com/
```



## Nav_side

- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#custom-sidebar-navigation-menu)

### in [navigation.yml](/dev/github_pages/example/view/navigation#create)

```yml
nav_side:
  - title: Categories
    url: /categories/
    children:
      - title: cat_A
        url: /categories/cat_A/
      - title: cat_B
        url: /categories/cat_B/
```

### in [front matter](/dev/github_pages/example/view/front_matter)

```yml
sidebar:
  nav: nav_side
```
