---
title: "3x3x3 / Corners First / EFL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/3x3x3/corners_first/efl
published: true
hidden: false
target: "_blank"
ruwix: true
teston: false
devon: true
---
<span
  id     = "cube"
  teston = "{{page.teston}}"
  devon  = "{{page.devon}}" >
</span>

<head>
  <base target = "{{page.target}}">
</head>



## U Layer

- White on U Face

  <iframe
    alg     = "M' U2' M"
    colored = "F FL FR FD FDL FDR U"
  ></iframe>

- White Not on U Face

  <iframe
    alg     = "M' U M"
    colored = "F FL FR FD FDL FDR U"
  ></iframe>



## D Layer

- White on D Face

  <iframe
    alg        = "M' U' M d M' U M"
    colored    = "F FL FR FD FDL FDR R RB RBD U"
    setupmoves = "d'"
  ></iframe>

- White Not on D Face

  <iframe
    alg     = "M' U' M U M' U2' M"
    colored = "F FL FR FD FDL FDR U"
  ></iframe>
