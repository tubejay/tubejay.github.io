---
title: Info
layout: single
toc: true
permalink: /dev/github_pages/config/info
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## site settings

- in [⚙️config.yml](/dev/github_pages/start/setting/config_yml)
- words_per_minute ➡️ [read_time](/dev/github_pages/front_matter/info#read_time)

```yml
locale           : "en-US"
title            : "Site Settings - title"
title_separator  : "-"
subtitle         : "Site Settings - subtitle" # site tagline that appears below site title in masthead
name             : "Site Settings - name"
description      : "Site Settings - description"
url              : # the base hostname & protocol for your site e.g. "https://mmistakes.github.io"
baseurl          : # the subpath of your site, e.g. "/blog"
repository       : # GitHub username/repo-name e.g. "mmistakes/minimal-mistakes"
teaser           : # path of fallback teaser image, e.g. "/assets/images/500x300.png"
logo             : # path of logo image to display in the masthead, e.g. "/assets/images/88x88.png"
masthead_title   : # overrides the website title displayed in the masthead, use " " for no title
words_per_minute : 200
```



## site author

- in [⚙️config.yml](/dev/github_pages/start/setting/config_yml)
- author ➡️ [author_profile](/dev/github_pages/front_matter/info#author_profile)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#author-profile)

```yml
author:
  name     : "Site Author - name"
  avatar   : # path of avatar image, e.g. "/assets/images/bio-photo.jpg"
  bio      : "Site Author - bio"
  location : "Site Author - location"
  email    : 
  links:
    - label: "Email"
      icon : "fas fa-fw fa-envelope-square"
      # url: "mailto:your.name@email.com"
    - label: "Website"
      icon : "fas fa-fw fa-link"
      # url: "https://your-website.com"
    - label: "Twitter"
      icon : "fab fa-fw fa-twitter-square"
      # url: "https://twitter.com/"
    - label: "Facebook"
      icon : "fab fa-fw fa-facebook-square"
      # url: "https://facebook.com/"
    - label: "GitHub"
      icon : "fab fa-fw fa-github"
      # url: "https://github.com/"
    - label: "Instagram"
      icon : "fab fa-fw fa-instagram"
      # url: "https://instagram.com/"
```
