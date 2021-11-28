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

- in [site author](/dev/github_pages/example/config/setting/info#site-author)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#author-profile)

```yml
author_profile: true
author_profile: false
```

### show_date

```yml
show_date: true
show_date: false
```

### read_time

- words_per_minute in [site settings](/dev/github_pages/example/config/setting/info#site-settings)

```yml
read_time: true
read_time: false
```

### share

```yml
share: true
share: false
```

### related

```yml
related: true
related: false
```

### comments

- in [comments](/dev/github_pages/example/config/setting/tool#comments)

```yml
comments: true
comments: false
```



## table of contents

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/toc-table/)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#table-of-contents)

### toc

```yml
toc: true
toc: false
```

### toc_sticky

```yml
toc_sticky: true
toc_sticky: false
```

### toc_label

```yml
toc_label: "Table of Contents"
```



## document

### date

```yml
date: YYYY-MM-DD
```

### title

```yml
title: word
title: "two or more words"
```

### categories

```yml
categories: category_name
```

### permalink

```yml
permalink: "/category_name/post_name"
```

### published

```yml
published: true
published: false
```

### hidden

```yml
hidden: true
hidden: false
```
