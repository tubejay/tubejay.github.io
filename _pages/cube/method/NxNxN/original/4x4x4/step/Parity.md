---
title: "4x4x4 / Parity"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/parity
published: true
hidden: false
twisty: true
puzzle: "4x4x4"
---
<span id="cube" puzzle="{{page.puzzle}}"></span>

<head>
  <base target="_blank">
  <link
    rel   = "stylesheet"
    type  = "text/css"
    href  = "/assets/css/twisty/player.css"
  >
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
</head>



## OLL Parity

- ( Rw U2 ) ( x ) ( Rw U2 ) x 2 ( Rw' U2 ) ( Lw U2 ) ( Rw' U2 ) ( Rw U2 ) ( Rw' U2 ) ( Rw' )

  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "OLL"
    alg                       = "(Rw U2') x (Rw U2')2 (Rw' U2') (Lw U2') (Rw' U2') (Rw U2') (Rw' U2') Rw'"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## PLL Parity

- ( 2R2 U2 ) ( 2R2 Uw2 ) x 2

  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "PLL"
    alg                       = "(2R2 U2') (2R2 Uw2')2"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## Reference

- Speed Cube DB
  - [OLL Parity](https://speedcubedb.com/a/4x4/OLLParity)
  - [PLL Parity](https://speedcubedb.com/a/4x4/PLLParity)
- Speedsolving Wiki
  - [Parity](https://www.speedsolving.com/wiki/index.php/4x4x4_parity_algorithms)
- vincent
  - [Parity](https://m.blog.naver.com/vincentcube/60149158694)
