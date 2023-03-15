---
title: "6x6x6 / Edge / Freeslice"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/6x6x6/edge/freeslice
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
      width         : 350px;
      height        : 400px;
    }
  </style>
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
</head>



## Complete Edge

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "6x6x6"
    experimental-stickering   = "F2L"
    alg                       = "R' D R 3U R' U R R U' R' 3D' U R' F R F' 4u' R U R'"
    experimental-setup-alg    = "2U 2D R U R' L' U' L y R U' R' y F' U F y2 R U' R' U L' U L 2U 2D2 R' D R L D' L' y2 D' F D' F' L D' L' 2U 2D2 R' D R L D L' 2U2 2D y2 R' D R L D' L' 2U' 2D2 R U R' L' U' L y2 R U' R' L' U2 L y2
F B 3U 3D R U R' L' U' L y2
R U' R' D' F L' F' L y2 F' R F R'
3U 3D2 2U' R U R' L U' L' y2 F L' F' L y2 D F L' F' L F' R F R'
2U' 3D' 2D2 y2 F R' F' R L F' L' F y2 F' L F L' R' F R F' 2U 3D 2D2"
    experimental-setup-anchor = "start"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>
