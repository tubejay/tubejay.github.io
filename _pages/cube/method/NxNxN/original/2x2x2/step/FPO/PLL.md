---
title: "2x2x2 / FPO / PLL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/2x2x2/fpo/pll
published: true
hidden: false
twisty: true
puzzle: "NxNxN / 2x2x2"
teston: false
---
<span
  id     = "cube"
  puzzle = "{{page.puzzle}}"
  teston = "{{page.teston}}"
  experimental-stickering   = "PLL"
  experimental-setup-anchor = "end" >
</span>

<head>
  <base target="_blank">
</head>



## Notation

- Permute : 3 Corners
- Fixed : 1 Front Corner



## Clockwise / Left

- ( U' L' ) ( U R ) ( U' L ) ( U R' )

  <twisty-player
    alg                    = "U' L' U R U' L U R'"
    experimental-setup-alg = "L U L' U L U2 L'"
  ></twisty-player>



## Counterclockwise / Right

- ( U R ) ( U' L' ) ( U R' ) ( U' L )

  <twisty-player
    alg                    = "U R U' L' U R' U' L"
    experimental-setup-alg = "R' U' R U' R' U2 R"
  ></twisty-player>



## Reference

- [3x3x3 / Beginner / CPLL](/cube/method/NxNxN/original/3x3x3/beginner/cpll)

