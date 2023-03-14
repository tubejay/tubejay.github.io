---
title: "4x4x4 / Edge / Pair"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/edge/pair
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



## Rotate

### Counterclockwise

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "F2L"
    alg                       = "R U' R'"
    experimental-setup-alg    = "2U L U L' R U' R' U' B' U B U'"
    experimental-setup-anchor = "start"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>

### Clockwise

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "F2L"
    alg                       = "F R' F' R"
    experimental-setup-alg    = "2U L U L' R U' R' U' B' U B U'"
    experimental-setup-anchor = "start"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>



## Flip

### Right

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "F2L"
    alg                       = "R U R' F R' F' R"
    experimental-setup-alg    = "2U L U L' R U' R' U' B' U B U' R U' R'"
    experimental-setup-anchor = "start"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>

### Left

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "F2L"
    alg                       = "F' U' F R' F R F'"
    experimental-setup-alg    = "2U L U L' R U' R' U' B' U B U' R U' R'"
    experimental-setup-anchor = "start"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>
