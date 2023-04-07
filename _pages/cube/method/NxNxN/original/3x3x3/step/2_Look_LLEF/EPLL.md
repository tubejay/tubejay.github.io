---
title: "3x3x3 / 2-Look LLEF / EPLL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/3x3x3/2_look_llef/epll
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
  colored = "U*/em"
  solved  = "U-" >
</span>

<head>
  <base target = "{{page.target}}">
</head>



## Adjacent Swap

<a href="https://logiqx.github.io/cubing-algs/html/2lllef.html#case-Adj">
  <img
    class = "rotate"
    deg   = 270
    src   = "https://www.speedsolving.com/wiki/images/f/fc/LLE_OA.jpg"
  />
</a>

- ( L U ) ( L' U ) ( L U2 ) ( L' )

  <iframe
    alg = "L U L' U L U2 L'"
  ></iframe>



## Opposite Swap

<a href="https://logiqx.github.io/cubing-algs/html/2lllef.html#case-Opp">
  <img
    src = "https://www.speedsolving.com/wiki/images/3/3a/LLE_OO.jpg"
  />
</a>

- [( Adjacent Swap )](#adjacent-swap) -> ( U' ) -> [( Adjacent Swap )](#adjacent-swap)

  <iframe
    alg = "L U L' U L U2 L' U' L U L' U L U2 L'"
  ></iframe>
