---
title: "3x3x3 / Roux / L6E / EO"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/3x3x3/roux/l6e/eo
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
  devon  = "{{page.devon}}"
  colored = "l r f b u d"
  solved  = "L*/cm R*/cm FL FR BL BR DL DR" >
</span>

<head>
  <base target = "{{page.target}}">
</head>



## Notation

- Flipped Edges on U Face / D Face



## 3 / 1 {#e-3-1}

- M' U' M'

  <iframe
    alg        = "M' U' M'"
    setupmoved = "x2 U2 M U2 M"
  ></iframe>
    <!-- src = "https://ruwix.com/widget/3d/?alg=M'%20U'%20M'&colored=l%20r%20f%20b%20u%20d&solved=L*/cm%20R*/cm%20FL%20FR%20BL%20BR%20DL%20DR&setupmoves=x2%20U2%20M%20U2%20M&hover=9&speed=500&flags=canvas" -->



## 2(Adjacent) / 2 {#e-2a-2}

- ( M' U' M' ) ( U' ) [( 3 / 1 )](#e-3-1)

  <iframe
    alg        = "M' U' M' U' M' U' M'"
    setupmoved = "U2 M U2 M"
  ></iframe>
    <!-- src = "https://ruwix.com/widget/3d/?alg=M'%20U'%20M'%20U'%20M'%20U'%20M'&colored=l%20r%20f%20b%20u%20d&solved=L*/cm%20R*/cm%20FL%20FR%20BL%20BR%20DL%20DR&setupmoves=U2%20M%20U2%20M&hover=9&speed=500&flags=canvas" -->



## 2(Opposite) / 0 {#e-2o-0}

- ( M' U' M' ) [( 2(adjacent) / 2 )](#e-2a-2)

  <iframe
    alg        = "M' U' M' M' U' M' U' M' U' M'"
    setupmoved = "x2 U2 M U2 M"
  ></iframe>
    <!-- src = "https://ruwix.com/widget/3d/?alg=M'%20U'%20M'%20M'%20U'%20M'%20U'%20M'%20U'%20M'&colored=l%20r%20f%20b%20u%20d&solved=L*/cm%20R*/cm%20FL%20FR%20BL%20BR%20DL%20DR&setupmoves=x2%20U2%20M%20U2%20M&hover=9&speed=500&flags=canvas" -->



## 2(Adjacent) / 0 {#e-2a-0}

- ( M' U' M' ) ( U2 ) [( 3 / 1 )](#e-3-1)

  <iframe
    alg        = "M' U' M' U2' M' U' M'"
    setupmoved = "U2 M U2 M"
  ></iframe>
    <!-- src = "https://ruwix.com/widget/3d/?alg=M'%20U'%20M'%20U2'%20M'%20U'%20M'&colored=l%20r%20f%20b%20u%20d&solved=L*/cm%20R*/cm%20FL%20FR%20BL%20BR%20DL%20DR&setupmoves=U2%20M%20U2%20M&hover=9&speed=500&flags=canvas" -->



## 1 / 1 {#e-1-1}

- ( M' U' M' ) ( U ) [( 2(adjacent) / 0 )](#e-2a-0)

  <iframe
    alg        = "M' U' M' U M' U' M' U2' M' U' M'"
    setupmoved = "x2 U2 M U2 M"
  ></iframe>
    <!-- src = "https://ruwix.com/widget/3d/?alg=M'%20U'%20M'%20U%20M'%20U'%20M'%20U2'%20M'%20U'%20M'&colored=l%20r%20f%20b%20u%20d&solved=L*/cm%20R*/cm%20FL%20FR%20BL%20BR%20DL%20DR&setupmoves=x2%20U2%20M%20U2%20M&hover=9&speed=500&flags=canvas" -->



## 4 / 2 {#e-4-2}

- ( M' U' M' ) ( U' ) [( 1 / 1 )](#e-1-1)

  <iframe
    alg        = "M' U' M' U' M' U' M' U M' U' M' U2' M' U' M'"
    setupmoved = "U2 M U2 M"
  ></iframe>
    <!-- src = "https://ruwix.com/widget/3d/?alg=M'%20U'%20M'%20U'%20M'%20U'%20M'%20U%20M'%20U'%20M'%20U2'%20M'%20U'%20M'&colored=l%20r%20f%20b%20u%20d&solved=L*/cm%20R*/cm%20FL%20FR%20BL%20BR%20DL%20DR&setupmoves=U2%20M%20U2%20M&hover=9&speed=500&flags=canvas" -->



## 4 / 0 {#e-4-0}

- ( M' U' M' ) [( 1 / 1 )](#e-1-1)

  <iframe
    alg        = "M' U' M' M' U' M' U M' U' M' U2' M' U' M'"
    setupmoved = "U2 M U2 M"
  ></iframe>
    <!-- src = "https://ruwix.com/widget/3d/?alg=M'%20U'%20M'%20M'%20U'%20M'%20U%20M'%20U'%20M'%20U2'%20M'%20U'%20M'&colored=l%20r%20f%20b%20u%20d&solved=L*/cm%20R*/cm%20FL%20FR%20BL%20BR%20DL%20DR&setupmoves=U2%20M%20U2%20M&hover=9&speed=500&flags=canvas" -->



## 2(Opposite) / 2 {#e-2o-2}

- ( U' M2 ) [( 4 / 0 )](#e-4-0)

  <iframe
    alg        = "U' M2' M' U' M' M' U' M' U M' U' M' U2' M' U' M'"
    setupmoved = "x2 U2 M U2 M"
  ></iframe>
    <!-- src = "https://ruwix.com/widget/3d/?alg=U'%20M2'%20M'%20U'%20M'%20M'%20U'%20M'%20U%20M'%20U'%20M'%20U2'%20M'%20U'%20M'&colored=l%20r%20f%20b%20u%20d&solved=L*/cm%20R*/cm%20FL%20FR%20BL%20BR%20DL%20DR&setupmoves=x2%20U2%20M%20U2%20M&hover=9&speed=500&flags=canvas" -->
