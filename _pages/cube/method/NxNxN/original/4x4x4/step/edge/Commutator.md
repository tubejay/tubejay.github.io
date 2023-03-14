---
title: "4x4x4 / Edge / Commutator"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/4x4x4/edge/commutator
published: true
hidden: false
---

<head>
  <base target="_blank">
  <style>
    img {
      max-width: 250px;
    }
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

- Permutation / Edge on B Layer



## Clockwise / Not Flipped

- ( Right to Left ) ( L' B L ) ( Left to Right ) ( L' B' L )
  <div class="img-wrapper">
    <a href="https://alpha.twizzle.net/edit/?puzzle=4x4x4&setup-anchor=end&stickering=ELL&alg=2F%27+L%27+B+L+2F+L%27+B%27+L">
      <img src="https://user-images.githubusercontent.com/92285528/215314828-9e73dc05-51eb-4f7f-bb0d-157ae8d31cb5.png">
    </a>
  </div>
  <div class="twisty-wrapper">
    <twisty-player
      puzzle                    = "4x4x4"
      experimental-stickering   = "ELL"
      alg                       = "2F' L' B L 2F L' B' L"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
      tempo-scale               = "1.3"
    ></twisty-player>
  </div>



## Clockwise / Flipped

- ( Right to Left ) ( U' L U L' ) ( Left to Right ) ( L U' L' U )
  <div class="img-wrapper">
    <a href="https://alpha.twizzle.net/edit/?puzzle=4x4x4&setup-anchor=end&stickering=ELL&alg=2F%27+U%27+L+U+L%27+2F+L+U%27+L%27+U">
      <img src="https://user-images.githubusercontent.com/92285528/215314943-0a0d0cc9-9600-4b68-b391-4e96d2a404b2.png">
    </a>
  </div>
  <div class="twisty-wrapper">
    <twisty-player
      puzzle                    = "4x4x4"
      experimental-stickering   = "ELL"
      alg                       = "2F' U' L U L' 2F L U' L' U"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
      tempo-scale               = "1.3"
    ></twisty-player>
  </div>



## Counterclockwise / Not Flipped

- ( Left to Right ) ( R B' R' ) ( Right to Left ) ( R B R' )
  <div class="img-wrapper">
    <a href="https://alpha.twizzle.net/edit/?puzzle=4x4x4&setup-anchor=end&stickering=ELL&alg=2F+R+B%27+R%27+2F%27+R+B+R%27">
      <img src="https://user-images.githubusercontent.com/92285528/215315041-2ede679f-078a-417d-a7de-6a11b181622c.png">
    </a>
  </div>
  <div class="twisty-wrapper">
    <twisty-player
      puzzle                    = "4x4x4"
      experimental-stickering   = "ELL"
      alg                       = "2F R B' R' 2F' R B R'"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
      tempo-scale               = "1.3"
    ></twisty-player>
  </div>



## Counterclockwise / Flipped

- ( Left to Right ) ( U R' U' R ) ( Right to Left ) ( R' U R U' )
  <div class="img-wrapper">
    <a href="https://alpha.twizzle.net/edit/?puzzle=4x4x4&setup-anchor=end&stickering=ELL&alg=2F+U+R%27+U%27+R+2F%27+R%27+U+R+U%27">
      <img src="https://user-images.githubusercontent.com/92285528/215315065-7ef20fbb-aa09-483b-81d6-b750d5834e98.png">
    </a>
  </div>
  <div class="twisty-wrapper">
    <twisty-player
      puzzle                    = "4x4x4"
      experimental-stickering   = "ELL"
      alg                       = "2F U R' U' R 2F' R' U R U'"
      experimental-setup-alg    = ""
      experimental-setup-anchor = "end"
      tempo-scale               = "1.3"
    ></twisty-player>
  </div>
