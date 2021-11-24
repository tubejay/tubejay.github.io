---
title: Config
layout: single
toc: true
permalink: /dev/github_pages/example/config
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## Create _config.yml

### copy raw contents from [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)

![image](https://user-images.githubusercontent.com/92285528/143048850-9d6d5a16-d76f-45a7-9716-0d59bc64a836.png)

### create and paste

![image](https://user-images.githubusercontent.com/92285528/143049485-a2ee1efb-2563-4b29-939b-39545e52ad16.png)

### set remote_theme : "mmistakes/minimal-mistakes"

- [Dreamgonfly's blog](https://dreamgonfly.github.io/blog/jekyll-remote-theme/)

![image](https://user-images.githubusercontent.com/92285528/143049894-ba643360-5ec5-49d4-9bd7-5a72eab51383.png)

### saved

![image](https://user-images.githubusercontent.com/92285528/143051516-bb6e3c92-16a8-4de6-8c81-5d5cadf51819.png)



## Setting

### theme

- remote_theme : "mmistakes/minimal-mistakes"
- minimal_mistakes_skin
  - light : [air](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#air-skin-air) / [contrast](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#contrast-skin-contrast) / [dirt](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#dirt-skin-dirt) / [mint](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#mint-skin-mint)
  - dark : [dark](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#dark-skin-dark) / [neon](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#neon-skin-neon)
  - color : [aqua](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#aqua-skin-aqua) / [plum](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#neon-skin-plum) / [sunrise](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#sunrise-skin-sunrise)

```yml
remote_theme             : "mmistakes/minimal-mistakes"
minimal_mistakes_skin    : "default" # "air", "aqua", "contrast", "dark", "dirt", "neon", "mint", "plum", "sunrise"
```

### site settings

- title / subtitle
- name / description
- breadcrumbs
  - [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/navigation/#breadcrumbs-beta)

```yml
locale                   : "en-US"
title                    : "Site Settings - title"
title_separator          : "-"
subtitle                 : "Site Settings - subtitle" # site tagline that appears below site title in masthead
name                     : "Site Settings - name"
description              : "Site Settings - description"
url                      : # the base hostname & protocol for your site e.g. "https://mmistakes.github.io"
baseurl                  : # the subpath of your site, e.g. "/blog"
repository               : # GitHub username/repo-name e.g. "mmistakes/minimal-mistakes"
teaser                   : # path of fallback teaser image, e.g. "/assets/images/500x300.png"
logo                     : # path of logo image to display in the masthead, e.g. "/assets/images/88x88.png"
masthead_title           : # overrides the website title displayed in the masthead, use " " for no title
# breadcrumbs            : false # true, false (default)
words_per_minute         : 200
```

### comments

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/blog-disqus/)

```yml
comments:
  provider               : # false (default), "disqus", "discourse", "facebook", "staticman", "staticman_v2", "utterances", "giscus", "custom"
  disqus:
    shortname            : # https://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-
  discourse:
    server               : # https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963 , e.g.: meta.discourse.org
  facebook:
    appid                :
    num_posts            : # 5 (default)
    colorscheme          : # "light" (default), "dark"
  utterances:
    theme                : # "github-light" (default), "github-dark"
    issue_term           : # "pathname" (default)
  giscus:
    repo_id              : # Shown during giscus setup at https://giscus.app
    category_name        : # Full text name of the category
    category_id          : # Shown during giscus setup at https://giscus.app
    discussion_term      : # "pathname" (default), "url", "title", "og:title"
    reactions_enabled    : # '1' for enabled (default), '0' for disabled
    theme                : # "light" (default), "dark", "dark_dimmed", "transparent_dark", "preferred_color_scheme"
  staticman:
    branch               : # "master"
    endpoint             : # "https://{your Staticman v3 API}/v3/entry/github/"
```

### search

```yml
search                   : # true, false (default)
search_full_content      : # true, false (default)
search_provider          : # lunr (default), algolia, google
```

### site author

- name
- bio
- location
- email
- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/blog-config/#6-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%A0%80%EC%9E%90-%EC%86%8C%EA%B0%9C)

```yml
author:
  name             : "Site Author - name"
  avatar           : # path of avatar image, e.g. "/assets/images/bio-photo.jpg"
  bio              : "Site Author - bio"
  location         : "Site Author - location"
  email            : 
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      # url: "mailto:your.name@email.com"
    - label: "Website"
      icon: "fas fa-fw fa-link"
      # url: "https://your-website.com"
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      # url: "https://twitter.com/"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      # url: "https://facebook.com/"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      # url: "https://github.com/"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      # url: "https://instagram.com/"
```

### reading files

```yml
include:
  - .htaccess
  - _pages
exclude:
  - "*.sublime-project"
  - "*.sublime-workspace"
  - vendor
  - .asset-cache
  - .bundle
  - .jekyll-assets-cache
  - .sass-cache
  - assets/js/plugins
  - assets/js/_main.js
  - assets/js/vendor
  - Capfile
  - CHANGELOG
  - config
  - Gemfile
  - Gruntfile.js
  - gulpfile.js
  - LICENSE
  - log
  - node_modules
  - package.json
  - package-lock.json
  - Rakefile
  - README
  - tmp
  - /docs # ignore Minimal Mistakes /docs
  - /test # ignore Minimal Mistakes /test
keep_files:
  - .git
  - .svn
encoding: "utf-8"
markdown_ext: "markdown,mkdown,mkdn,mkd,md"
```

### conversion

```yml
markdown: kramdown
highlighter: rouge
lsi: false
excerpt_separator: "\n\n"
incremental: false
```

### markdown processing

```yml
kramdown:
  input: GFM
  hard_wrap: false
  auto_ids: true
  footnote_nr: 1
  entity_output: as_char
  toc_levels: 1..6
  smart_quotes: lsquo,rsquo,ldquo,rdquo
  enable_coderay: false
```

### outputting

```yml
permalink: /:categories/:title/
paginate: 5 # amount of posts to show
paginate_path: /page:num/
timezone: # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
```

### plugins

- [dependency](https://pages.github.com/versions/)

```yml
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache
whitelist:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache
```

### archives

```yml
category_archive:
  type: liquid
  path: /categories/
tag_archive:
  type: liquid
  path: /tags/
```

### front matter defaults

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
