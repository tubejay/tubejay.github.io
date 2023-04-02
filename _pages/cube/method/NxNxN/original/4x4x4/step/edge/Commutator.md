---
title: "4x4x4 / Edge / Commutator"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/edge/commutator
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
  experimental-stickering   = "ELL"
  experimental-setup-alg    = ""
  experimental-setup-anchor = "end" >
</span>

<head>
  <base target="_blank">
</head>



## Notation

- Permutation / Edge on B Layer



## Clockwise / Not Flipped

- ( Right to Left ) ( L' B L ) ( Left to Right ) ( L' B' L )

  <twisty-player
    alg = "2F' L' B L 2F L' B' L"
  ></twisty-player>



## Clockwise / Flipped

- ( Right to Left ) ( U' L U L' ) ( Left to Right ) ( L U' L' U )

  <twisty-player
    alg = "2F' U' L U L' 2F L U' L' U"
  ></twisty-player>



## Counterclockwise / Not Flipped

- ( Left to Right ) ( R B' R' ) ( Right to Left ) ( R B R' )

  <twisty-player
    alg = "2F R B' R' 2F' R B R'"
  ></twisty-player>



## Counterclockwise / Flipped

- ( Left to Right ) ( U R' U' R ) ( Right to Left ) ( R' U R U' )

  <twisty-player
    alg = "2F U R' U' R 2F' R' U R U'"
  ></twisty-player>
