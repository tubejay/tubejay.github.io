---
title: "4x4x4 / Edge / Pair"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/edge/pair
published: true
hidden: false
twisty: true
puzzle: "NxNxN / 4x4x4"
teston: false
---
<span
  id     = "cube"
  puzzle = "{{page.puzzle}}"
  teston = "{{page.teston}}"
  experimental-stickering   = "F2L"
  experimental-setup-anchor = "start" >
</span>

<head>
  <base target="_blank">
</head>



## Rotate

### Counterclockwise

<twisty-player
  alg                    = "R U' R'"
  experimental-setup-alg = "2U L U L' R U' R' U' B' U B U'"
></twisty-player>

### Clockwise

<twisty-player
  alg                    = "F R' F' R"
  experimental-setup-alg = "2U L U L' R U' R' U' B' U B U'"
></twisty-player>



## Flip

### Right

<twisty-player
  alg                    = "R U R' F R' F' R"
  experimental-setup-alg = "2U L U L' R U' R' U' B' U B U' R U' R'"
></twisty-player>

### Left

<twisty-player
  alg                    = "F' U' F R' F R F'"
  experimental-setup-alg = "2U L U L' R U' R' U' B' U B U' R U' R'"
></twisty-player>
