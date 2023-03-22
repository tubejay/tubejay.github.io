---
title: "3x3 Pyraminx / Method"
layout: single
toc: true
permalink: /cube/method/tetrahedron/face_turning/3x3_pyraminx/method
published: true
hidden: false
---

<head>
  <base target="_blank">
  <link
    rel   = "stylesheet"
    type  = "text/css"
    href  = "/assets/css/twisty/Tetrahedron/3x3_Pyraminx.css"
  >
  <script
    src   = "https://cdn.cubing.net/js/cubing/twisty"
    type  = "module"
    defer
  ></script>
</head>



## Corner



## Edge

### Bottom Layer

- Move Edge to Front Bottom
  - from Front Right : ( R' L ) ( R L' )
    <div class="twisty-wrapper">
      <twisty-player
        dark-mode                 = "dark"
        background                = "none"
        puzzle                    = "pyraminx"
        experimental-stickering   = "full"
        alg                       = "R' L R L'"
        experimental-setup-alg    = ""
        experimental-setup-anchor = "end"
        tempo-scale               = "1.3"
      ></twisty-player>
    </div>
  - from Front Left : ( L R' ) ( L' R )
    <div class="twisty-wrapper">
      <twisty-player
        dark-mode                 = "dark"
        background                = "none"
        puzzle                    = "pyraminx"
        experimental-stickering   = "full"
        alg                       = "L R' L' R"
        experimental-setup-alg    = ""
        experimental-setup-anchor = "end"
        tempo-scale               = "1.3"
      ></twisty-player>
    </div>

### Middle Layer

- Permute 3 Edges
  - Clockwise : ( R' U' ) ( R U' ) ( R' U' ) ( R )
    <div class="twisty-wrapper">
      <twisty-player
        dark-mode                 = "dark"
        background                = "none"
        puzzle                    = "pyraminx"
        experimental-stickering   = "full"
        alg                       = "R' U' R U' R' U' R"
        experimental-setup-alg    = ""
        experimental-setup-anchor = "end"
        tempo-scale               = "1.3"
      ></twisty-player>
    </div>
  - Counterclockwise : ( L U ) ( L' U ) ( L U ) ( L' )
    <div class="twisty-wrapper">
      <twisty-player
        dark-mode                 = "dark"
        background                = "none"
        puzzle                    = "pyraminx"
        experimental-stickering   = "full"
        alg                       = "L U L' U L U L'"
        experimental-setup-alg    = ""
        experimental-setup-anchor = "end"
        tempo-scale               = "1.3"
      ></twisty-player>
    </div>
- Flip 2 Edges : Front Left & Front Right
  - ( R' L ) ( R L' ) ( U L' ) ( U' L )
    <div class="twisty-wrapper">
      <twisty-player
        dark-mode                 = "dark"
        background                = "none"
        puzzle                    = "pyraminx"
        experimental-stickering   = "full"
        alg                       = "R' L R L' U L' U' L"
        experimental-setup-alg    = ""
        experimental-setup-anchor = "end"
        tempo-scale               = "1.3"
      ></twisty-player>
    </div>



## Reference

- [아이엠준](https://youtu.be/mO3excjvvoA)
- [Manqube Manish Rathod](https://youtu.be/p0Z1M7fO_PQ)