---
title: "6x6x6 / Parity"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/6x6x6/parity
published: true
hidden: false
twisty: true
puzzle: "NxNxN / 6x6x6"
teston: false
---
<span
  id     = "cube"
  puzzle = "{{page.puzzle}}"
  teston = "{{page.teston}}"
  experimental-setup-alg    = ""
  experimental-setup-anchor = "end" >
</span>

<head>
  <base target="_blank">
</head>




## OLL Parity

- ( 3Rw U2 ) ( x ) ( 3Rw U2 ) x 2 ( 3Rw' U2 ) ( 3Lw U2 ) ( 3Rw' U2 ) ( 3Rw U2 ) ( 3Rw' U2 ) ( 3Rw' )

  <twisty-player
    alg                     = "(3Rw U2') x (3Rw U2')2 (3Rw' U2') (3Lw U2') (3Rw' U2') (3Rw U2') (3Rw' U2') 3Rw'"
    experimental-stickering = "OLL"
  ></twisty-player>



## PLL Parity

- ( 2-3R2 U2 ) ( 2-3R2 3Uw2 ) x 2

  <twisty-player
    alg                     = "2-3R2 U2' (2-3R2 3Uw2')2"
    experimental-stickering = "PLL"
  ></twisty-player>
