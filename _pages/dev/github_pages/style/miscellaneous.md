---
title: Miscellaneous
layout: single
toc: true
permalink: /dev/github_pages/style/miscellaneous
published: true
hidden: false
---



## animation

- in [main.scss](/dev/github_pages/style/customization#mainscss)
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#disabling-animations)

```scss
$intro-transition  : none;
$global-transition : none;
```



## table

- in [main.scss](/dev/github_pages/style/customization#mainscss)

```scss
th,td {border-right:1px solid #262626}
th:first-child, td:first-child {border-left :0px}
th:last-child,  td:last-child  {border-right:0px}
```



## masthead

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/github-pages-settings/#2-%EB%A9%94%EB%89%B4%EB%B0%94-%EC%82%AC%EC%9D%B4%EC%A6%88-%EC%A1%B0%EC%A0%95)



## link

- [취미로 코딩하는 개발자](https://devinlife.com/howto%20github%20pages/github-pages-settings/#4-css-a-tag-%ED%95%98%EC%9D%B4%ED%8D%BC%EB%A7%81%ED%81%AC-%EB%B0%91%EC%A4%84-%EC%97%86%EC%95%A0%EA%B8%B0)



## mathjax

- [How to add Latex to Minimal Mistakes](https://www.janmeppe.com/blog/How-to-add-mathjax-to-minimal-mistakes/)
- [GitHub 블로그에 mathjax 추가하기](https://sanglee325.github.io/blog/mathjax-github-io/#minimal-mistakes-theme)

### in [config](/dev/github_pages/config/setting/build#conversion)

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
