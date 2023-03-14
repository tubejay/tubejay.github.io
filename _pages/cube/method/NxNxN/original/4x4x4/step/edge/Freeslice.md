---
title: "4x4x4 / Edge / Freeslice"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/edge/freeslice
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
      height        : 300px;
    }
  </style>
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
</head>



## Set 3 Pairs

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "F2L"
    alg                       = "L' U L F' U F y U' F R' F' R y F' R F R' u' y y"
    experimental-setup-alg    = "2U R U R' y' R U R' z2 L' U L y2 F' U F 2U F' U F F U' F' 2U R U' R' L' U L z2 y R U' R' y R U2 R'"
    experimental-setup-anchor = "start"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>



## 3 Pairs to U Layer

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "F2L"
    alg                       = "R U' R' y R U' R' y R U R' y"
    experimental-setup-alg    = "2U R U R' y' R U R' z2 L' U L y2 F' U F 2U F' U F F U' F' 2U R U' R' L' U L z2 y R U' R' y R U2 R' 2U' L' U L F' U F y U' F R' F' R y F' R F R' u' y y"
    experimental-setup-anchor = "start"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>



## Reference

- Speedsolving Wiki
  - [Freeslice Egde Paring](https://www.speedsolving.com/wiki/index.php/Edge_pairing#Freeslice_edge_pairing)
