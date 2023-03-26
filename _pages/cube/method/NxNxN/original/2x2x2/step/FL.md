---
title: "2x2x2 / FL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/2x2x2/fl
published: true
hidden: false
twisty: true
cube: "2x2x2"
---
{% assign pagecube = page.cube %}

<head>
  <base target="_blank">
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
  <link
    rel   = "stylesheet"
    type  = "text/css"
    href  = "/assets/css/twisty/NxNxN/2x2x2.css"
  >
</head>



<div class="test">
empty
</div>



## White Not on U Face

- Right : R U R'

  <twisty-player
    puzzle                    = "2x2x2"
    experimental-stickering   = "F2L"
    alg                       = "R U R'"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>

- Left : F' U' F

  <twisty-player
    puzzle                    = "2x2x2"
    experimental-stickering   = "F2L"
    alg                       = "F' U' F"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## White on U Face

- Right : ( R U' R' U ) ( F' U F )

  <twisty-player
    puzzle                    = "2x2x2"
    experimental-stickering   = "F2L"
    alg                       = "R U' R' U F' U F"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>

- Left : ( F' U F U' ) ( R U' R' )

  <twisty-player
    puzzle                    = "2x2x2"
    experimental-stickering   = "F2L"
    alg                       = "F' U F U' R U' R'"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## Reference

- [3x3x3 / Beginner / FL](/cube/method/NxNxN/original/3x3x3/beginner/fl)
