---
title: "2x2x2 / FL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/2x2x2/fl
published: true
hidden: false
---

<head>
  <base target="_blank">
  <style>
    .twisty-wrapper {
      margin        : 20px 0px;
    }
    twisty-player {
      visualization : "3D"
      background    : "checkered-transparent";
      hint-facelets : "floating";
      width         : 300px;
      height        : 200px;
    }
  </style>
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
</head>



## White Not on U Face

- Right : R U R'
  <div class="twisty-wrapper">
    <twisty-player
      puzzle                    = "2x2x2"
      experimental-stickering   = "F2L"
      alg                       = "R U R'"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
    ></twisty-player>
  </div>
- Left : F' U' F
  <div class="twisty-wrapper">
    <twisty-player
      puzzle                    = "2x2x2"
      experimental-stickering   = "F2L"
      alg                       = "F' U' F"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
    ></twisty-player>
  </div>



## White on U Face

- Right : ( R U' R' U ) ( F' U F )
  <div class="twisty-wrapper">
    <twisty-player
      puzzle                    = "2x2x2"
      experimental-stickering   = "F2L"
      alg                       = "R U' R' U F' U F"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
    ></twisty-player>
  </div>
- Left : ( F' U F U' ) ( R U' R' )
  <div class="twisty-wrapper">
    <twisty-player
      puzzle                    = "2x2x2"
      experimental-stickering   = "F2L"
      alg                       = "F' U F U' R U' R'"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
    ></twisty-player>
  </div>


## Reference

- [3x3x3 / Beginner / FL](/cube/method/NxNxN/original/3x3x3/beginner/fl)
