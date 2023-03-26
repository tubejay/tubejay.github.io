---
title: "2x2x2 / FOP / PLL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/2x2x2/fop/pll
published: true
hidden: false
---

<head>
  <base target="_blank">
  <link
    rel   = "stylesheet"
    type  = "text/css"
    href  = "/assets/css/twisty/NxNxN/2x2x2.css"
  >
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
</head>



## Adjacent Swap

<img src="https://www.speedsolving.com/wiki/images/c/c0/2X2X2Algos-T.jpg">

- Jb Perm : ( R U2 R' U' ) ( R U2 L' U ) ( R' U' L )

    <twisty-player
      puzzle                    = "2x2x2"
      experimental-stickering   = "PLL"
      alg                       = "R U2' R' U' R U2 L' U R' U' L"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
    ></twisty-player>



## Opposite Swap

<img src="https://www.speedsolving.com/wiki/images/d/df/2X2X2Algos-Y.jpg">

- Y Perm : ( F ) ( R U' R' U' ) ( R U R' F' ) ( R U R' U' ) ( R' F R F' )

    <twisty-player
      puzzle                    = "2x2x2"
      experimental-stickering   = "PLL"
      alg                       = "F R U' R' U' R U R' F' R U R' U' R' F R F'"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
    ></twisty-player>



## Reference

- [3x3x3 / 2-Look PLL / CPLL](/cube/method/NxNxN/original/3x3x3/2_look_pll/cpll)
- Speedsolving Wiki
  - [PLL](https://www.speedsolving.com/wiki/index.php/PLL_(2x2x2))
- vincent
  - [PLL](https://m.blog.naver.com/vincentcube/60134585117)
