---
title: "2x2x2 / FL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/2x2x2/fl
published: true
hidden: false
twisty: true
puzzle: "NxNxN / 2x2x2"
---
<span id="cube" puzzle="{{page.puzzle}}"></span>
<div id="test">empty</div>

<head>
  <base target="_blank">
</head>



## White Not on U Face

- Right : R U R'

  <twisty-player
    experimental-stickering   = "F2L"
    alg                       = "R U R'"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>

- Left : F' U' F

  <twisty-player
    experimental-stickering   = "F2L"
    alg                       = "F' U' F"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## White on U Face

- Right : ( R U' R' U ) ( F' U F )

  <twisty-player
    experimental-stickering   = "F2L"
    alg                       = "R U' R' U F' U F"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>

- Left : ( F' U F U' ) ( R U' R' )

  <twisty-player
    experimental-stickering   = "F2L"
    alg                       = "F' U F U' R U' R'"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## Reference

- [3x3x3 / Beginner / FL](/cube/method/NxNxN/original/3x3x3/beginner/fl)
