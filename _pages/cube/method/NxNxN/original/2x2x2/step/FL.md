---
title: "2x2x2 / FL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/2x2x2/fl
published: true
hidden: false
target: "_blank"
twisty: true
puzzle: "NxNxN / 2x2x2"
teston: false
---
<span
  id     = "cube"
  puzzle = "{{page.puzzle}}"
  teston = "{{page.teston}}"
  experimental-stickering   = "F2L"
  experimental-setup-alg    = ""
  experimental-setup-anchor = "end" >
</span>

<head>
  <base target = "{{page.target}}">
</head>



## White Not on U Face

- Right : R U R'

  <twisty-player
    alg = "R U R'"
  ></twisty-player>

- Left : F' U' F

  <twisty-player
    alg = "F' U' F"
  ></twisty-player>



## White on U Face

- Right : ( R U' R' U ) ( F' U F )

  <twisty-player
    alg = "R U' R' U F' U F"
  ></twisty-player>

- Left : ( F' U F U' ) ( R U' R' )

  <twisty-player
    alg = "F' U F U' R U' R'"
  ></twisty-player>



## Reference

- [3x3x3 / Beginner / FL](/cube/method/NxNxN/original/3x3x3/beginner/fl)
