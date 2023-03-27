---
title: "2x2x2 / FPO / OLL"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/2x2x2/fpo/oll
published: true
hidden: false
twisty: true
puzzle: "2x2x2"
---
<span id="cube" puzzle="{{page.puzzle}}"></span>

<head>
  <base target="_blank">
  <link
    rel   = "stylesheet"
    type  = "text/css"
    href  = "/assets/css/twisty/NxNxN/2x2x2.css"
  >
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
</head>



## Algorithm

- Repeat for each corner
  - Orient
    - Front Right
    - ( R' D' R D ) x 2
  - Rotate
    - U layer



## Example

<twisty-player
  experimental-stickering   = "LL"
  alg                       = "(R' D' R D)4 U (R' D' R D)4 U (R' D' R D)2 U (R' D' R D)2"
  experimental-setup-alg    = ""
  experimental-setup-anchor = "end"
></twisty-player>



## Reference

- [3x3x3 / Beginner / COLL](/cube/method/NxNxN/original/3x3x3/beginner/coll)
