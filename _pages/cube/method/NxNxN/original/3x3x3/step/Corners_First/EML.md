---
title: "3x3x3 / Corners First / EML"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/3x3x3/corners_first/eml
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

- Right

  <iframe
    alg     = "M R U M' U' R'"
    colored = "F U FDL FDR FR"
  ></iframe>

- Left

  <iframe
    alg     = "S F' U' S' U F"
    colored = "U R RFD RBD RF"
  ></iframe>



## D Layer

- Right

  <iframe
    alg     = "R U M' U' r'"
    colored = "F U FDL FDR FR"
  ></iframe>

- Left

  <iframe
    alg     = "F' U' S' U f"
    colored = "U R RFD RBD RF"
  ></iframe>



## E Layer

- Right

  <iframe
    alg        = "R U M U' R' M' d M R U M' U' R'"
    colored    = "U F R FR FDL FDR BDR"
    setupmoves = "d'"
  ></iframe>

- Left

  <iframe
    alg        = "F' U' S U F S' d' S F' U' S' U F"
    colored    = "U R F RF RDF RDB FDL"
    setupmoves = "d"
  ></iframe>
