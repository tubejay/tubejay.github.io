---
title: "4x4x4 / Edge / Commutator"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/edge/commutator
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

- Permutation / Edge on B Layer



## Clockwise / Not Flipped

- ( Right to Left ) ( L' B L ) ( Left to Right ) ( L' B' L )

  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "ELL"
    alg                       = "2F' L' B L 2F L' B' L"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## Clockwise / Flipped

- ( Right to Left ) ( U' L U L' ) ( Left to Right ) ( L U' L' U )

  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "ELL"
    alg                       = "2F' U' L U L' 2F L U' L' U"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## Counterclockwise / Not Flipped

- ( Left to Right ) ( R B' R' ) ( Right to Left ) ( R B R' )

  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "ELL"
    alg                       = "2F R B' R' 2F' R B R'"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>



## Counterclockwise / Flipped

- ( Left to Right ) ( U R' U' R ) ( Right to Left ) ( R' U R U' )

  <twisty-player
    puzzle                    = "4x4x4"
    experimental-stickering   = "ELL"
    alg                       = "2F U R' U' R 2F' R' U R U'"
    experimental-setup-alg    = ""
    experimental-setup-anchor = "end"
  ></twisty-player>
