---
title     : Math
layout    : single
toc       : true
permalink : /dev/github_pages/insert/math
published : true
hidden    : false
---

<head>
  <base target="_blank">
</head>



## mathjax

- [How to add Latex to Minimal Mistakes](https://www.janmeppe.com/blog/How-to-add-mathjax-to-minimal-mistakes/)
- [GitHub 블로그에 mathjax 추가하기](https://sanglee325.github.io/blog/mathjax-github-io/#minimal-mistakes-theme)

### in [config.yml](/dev/github_pages/config/setting/build#conversion)

```yml
markdown: kramdown
```

### in [scripts.html](/dev/github_pages/style/customization#scriptshtml)

```html
<script type="text/javascript" async
	src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML">
</script>

<script type="text/x-mathjax-config">
   MathJax.Hub.Config({
     extensions: ["tex2jax.js"],
     jax: ["input/TeX", "output/HTML-CSS"],
     tex2jax: {
       inlineMath: [ ['$','$'], ["\\(","\\)"] ],
       displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
       processEscapes: true
     },
     "HTML-CSS": { availableFonts: ["TeX"] }
   });
</script>
```
