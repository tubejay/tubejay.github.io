---
title: Tool
layout: single
toc: true
permalink: /dev/github_pages/config/setting/tool
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## comments

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/blog-disqus/)

```yml
comments:
  provider            : # false (default), "disqus", "discourse", "facebook", "staticman", "staticman_v2", "utterances", "giscus", "custom"
  disqus:
    shortname         : # https://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-
  discourse:
    server            : # https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963 , e.g.: meta.discourse.org
  facebook:
    appid             :
    num_posts         : # 5 (default)
    colorscheme       : # "light" (default), "dark"
  utterances:
    theme             : # "github-light" (default), "github-dark"
    issue_term        : # "pathname" (default)
  giscus:
    repo_id           : # Shown during giscus setup at https://giscus.app
    category_name     : # Full text name of the category
    category_id       : # Shown during giscus setup at https://giscus.app
    discussion_term   : # "pathname" (default), "url", "title", "og:title"
    reactions_enabled : # '1' for enabled (default), '0' for disabled
    theme             : # "light" (default), "dark", "dark_dimmed", "transparent_dark", "preferred_color_scheme"
  staticman:
    branch            : # "master"
    endpoint          : # "https://{your Staticman v3 API}/v3/entry/github/"
```



## search

- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#exclusions)

```yml
search              : true # true, false (default)
search_full_content : true # true, false (default)
search_provider     : # lunr (default), algolia, google
```
