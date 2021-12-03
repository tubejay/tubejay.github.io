---
title: Customization
layout: single
toc: true
permalink: /dev/github_pages/style/customization
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## structure

- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/)

```
minimal-mistakes
├── _sass
|  └── minimal-mistakes
|     ├── vendor               # vendor SCSS partials
|     |   ├── breakpoint       # media query mixins
|     |   ├── magnific-popup   # Magnific Popup lightbox
|     |   └── susy             # Susy grid system
|     ├── _animations.scss     # animations
|     ├── _archive.scss        # archives (list, grid, feature views)
|     ├── _base.scss           # base HTML elements
|     ├── _buttons.scss        # buttons
|     ├── _footer.scss         # footer
|     ├── _masthead.scss       # masthead
|     ├── _mixins.scss         # mixins (em function, clearfix)
|     ├── _navigation.scss     # nav links (breadcrumb, priority+, toc, pagination, etc.)
|     ├── _notices.scss        # notices
|     ├── _page.scss           # pages
|     ├── _print.scss          # print styles
|     ├── _reset.scss          # reset
|     ├── _sidebar.scss        # sidebar
|     ├── _syntax.scss         # syntax highlighting
|     ├── _tables.scss         # tables
|     ├── _utilities.scss      # utility classes (text/image alignment)
|     └── _variables.scss      # theme defaults (fonts, colors, etc.)
├── assets
|  ├── css
|  |  └── main.scss            # main stylesheet, loads SCSS partials in _sass
```



## main.scss

- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#customizing)

### copy

- copy raw contents from [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes/blob/master/assets/css/main.scss)

![image](https://user-images.githubusercontent.com/92285528/144621536-4e184df1-7c53-4d81-a2ca-75ac9c555f0c.png)

### paste

- `/assets/css/main.scss`

![image](https://user-images.githubusercontent.com/92285528/144621773-4cba7d6f-d78c-4397-82c7-517864ec91f5.png)



## custom.html

- `/_includes/head/custom.html`

![image](https://user-images.githubusercontent.com/92285528/144621920-31884fef-9e0e-487c-b2e3-e7e1cf8a30d5.png)
