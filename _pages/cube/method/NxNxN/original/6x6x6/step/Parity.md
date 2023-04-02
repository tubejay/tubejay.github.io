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
  teston = "{{page.teston}}" >
</span>

<head>
  <base target="_blank">
</head>




## OLL Parity

- ( 3Rw U2 ) ( x ) ( 3Rw U2 ) x 2 ( 3Rw' U2 ) ( 3Lw U2 ) ( 3Rw' U2 ) ( 3Rw U2 ) ( 3Rw' U2 ) ( 3Rw' )

  <twisty-player
    puzzle                    = "6x6x6"
    experimental-stickering   = "OLL"
    alg                       = "(3Rw U2') x (3Rw U2')2 (3Rw' U2') (3Lw U2') (3Rw' U2') (3Rw U2') (3Rw' U2') 3Rw'"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## PLL Parity

- ( 2-3R2 U2 ) ( 2-3R2 3Uw2 ) x 2

  <twisty-player
    puzzle                    = "6x6x6"
    experimental-stickering   = "PLL"
    alg                       = "2-3R2 U2' (2-3R2 3Uw2')2"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>
