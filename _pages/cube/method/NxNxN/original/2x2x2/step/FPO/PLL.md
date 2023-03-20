---
title: "2x2x2 / FPO / PLL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/2x2x2/fpo/pll
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



## Notation

- Permute : 3 Corners
- Fixed : 1 Front Corner



## Clockwise / Left

- ( U' L' ) ( U R ) ( U' L ) ( U R' )
  <div class="twisty-wrapper">
    <twisty-player
      dark-mode                 = "dark"
      background                = "none"
      puzzle                    = "2x2x2"
      experimental-stickering   = "PLL"
      alg                       = "U' L' U R U' L U R'"
      experimental-setup-alg    = "L U L' U L U2 L'"
      experimental-setup-anchor = "end"
      tempo-scale               = "1.3"
    ></twisty-player>
  </div>



## Counterclockwise / Right

- ( U R ) ( U' L' ) ( U R' ) ( U' L )
  <div class="twisty-wrapper">
    <twisty-player
      dark-mode                 = "dark"
      background                = "none"
      puzzle                    = "2x2x2"
      experimental-stickering   = "PLL"
      alg                       = "U R U' L' U R' U' L"
      experimental-setup-alg    = "R' U' R U' R' U2 R"
      experimental-setup-anchor = "end"
      tempo-scale               = "1.3"
    ></twisty-player>
  </div>



## Reference

- [3x3x3 / Beginner / CPLL](/cube/method/NxNxN/original/3x3x3/beginner/cpll)
