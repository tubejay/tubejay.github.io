---
title: "5x5x5 / Center / Case"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/5x5x5/center/case
published: true
hidden: false
twisty: true
puzzle: "NxNxN / 5x5x5"
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



## Edge in Center

<twisty-player
  puzzle                    = "5x5x5"
  experimental-stickering   = "centers-only"
  alg                       = "r' F r"
  experimental-setup-alg    = "2R' F' 2L F 2R F' 2L' 2R' F' 2L F 2R F' 2L' F2 U' 2R' F2 2R F 2F2 2B2"
  experimental-setup-anchor = "start"
></twisty-player>



## Corner in Center

<twisty-player
  puzzle                    = "5x5x5"
  experimental-stickering   = "centers-only"
  alg                       = "Rw U Rw' U Rw U2' Rw'"
  experimental-setup-alg    = "2R' F' 2L F 2R F' 2L' F U2"
  experimental-setup-anchor = "start"
></twisty-player>
