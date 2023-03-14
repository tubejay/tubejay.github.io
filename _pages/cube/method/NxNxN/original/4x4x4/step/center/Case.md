---
title: "4x4x4 / Center / Case"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/center/case
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



## Notation

- F Face / U Face



## 3 / 1

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "centers-only"
    alg                       = "r U r'"
    experimental-setup-alg    = "f U R f'"
    experimental-setup-anchor = "end"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>



## 2 Adjacent / 2 Adjacent

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "centers-only"
    alg                       = "r U2 r'"
    experimental-setup-alg    = "f U R f'"
    experimental-setup-anchor = "end"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>



## 2 Adjacent / 2 Opposite

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "centers-only"
    alg                       = "r U r' U2 r U r'"
    experimental-setup-alg    = "f U R f'"
    experimental-setup-anchor = "end"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>



## 2 Opposite / 2 Opposite

<div class="twisty-wrapper">
  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "centers-only"
    alg                       = "r U r2' F r"
    experimental-setup-alg    = "f U R f'"
    experimental-setup-anchor = "end"
    tempo-scale               = "1.3"
  ></twisty-player>
</div>
