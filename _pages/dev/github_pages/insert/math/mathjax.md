---
title     : MathJax
layout    : single
toc       : true
permalink : /dev/github_pages/insert/math/mathjax
published : true
hidden    : false
---

<head>
  <base target="_blank">
</head>



## setting

- [How to add Latex to Minimal Mistakes](https://www.janmeppe.com/blog/How-to-add-mathjax-to-minimal-mistakes/)
- [GitHub 블로그에 mathjax 추가하기](https://sanglee325.github.io/blog/mathjax-github-io/#minimal-mistakes-theme)

### in [config.yml](/dev/github_pages/start/setting/config_yml)

```yml
markdown: kramdown
```

### in [scripts.html](/dev/github_pages/start/setting/scripts_html)

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



## use

### inline

- [Archimedean property](https://en.m.wikipedia.org/wiki/Archimedean_property)

```
for every positive $x,y \in \mathbb{R}$, there is an integer $n$ with $nx > y$
```
for every positive $x,y \in \mathbb{R}$, there is an integer $n$ with $nx > y$

### displayed

```
$$
\begin{align*}
  & \forall \epsilon > 0, \exists \delta > 0 \\
  & \text{such that } \forall x \in \mathbb{R} \text{ with } 0 < |x-p| < \delta, |f(x)-L| < \epsilon
\end{align*}
$$
```

$$
\begin{align*}
  & \forall \epsilon > 0, \exists \delta > 0 \\
  & \text{such that } \forall x \in \mathbb{R} \text{ with } 0 < |x-p| < \delta, |f(x)-L| < \epsilon
\end{align*}
$$
