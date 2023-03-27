---
title: "4x4x4 / Center / Case"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/center/case
published: true
hidden: false
twisty: true
puzzle: "4x4x4"
---
<span id="cube" puzzle="{{page.puzzle}}"></span>

<head>
  <base target="_blank">
  <link
    rel   = "stylesheet"
    type  = "text/css"
    href  = "/assets/css/twisty/player.css"
  >
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
</head>



## Notation

- F Face / U Face



## 3 / 1

<twisty-player
  puzzle                    = "4x4x4"
  experimental-stickering   = "centers-only"
  alg                       = "r U r'"
  experimental-setup-alg    = "f U R f'"
  experimental-setup-anchor = "end"
></twisty-player>



## 2 Adjacent / 2 Adjacent

<twisty-player
  puzzle                    = "4x4x4"
  experimental-stickering   = "centers-only"
  alg                       = "r U2 r'"
  experimental-setup-alg    = "f U R f'"
  experimental-setup-anchor = "end"
></twisty-player>



## 2 Adjacent / 2 Opposite

<twisty-player
  puzzle                    = "4x4x4"
  experimental-stickering   = "centers-only"
  alg                       = "r U r' U2 r U r'"
  experimental-setup-alg    = "f U R f'"
  experimental-setup-anchor = "end"
></twisty-player>



## 2 Opposite / 2 Opposite

<twisty-player
  puzzle                    = "4x4x4"
  experimental-stickering   = "centers-only"
  alg                       = "r U r2' F r"
  experimental-setup-alg    = "f U R f'"
  experimental-setup-anchor = "end"
></twisty-player>
