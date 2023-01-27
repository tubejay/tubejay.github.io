---
title: "3x3x3 / CFEC"
layout: single
toc: true
permalink: /cube/method/NxNxN/original/3x3x3/cfec
published: true
hidden: false
---

<head>
  <base target="_blank">
  <style>
    .iframe-wrapper {
      overflow    : hidden;
    }
    iframe {
      width       : 250px;
      height      : 330px;
      margin-top  : -20px;
      border      : none;
    }
  </style>
</head>



## Cross



## F2L : First Two Layers {#f2l}



## ELL : Edges of the Last Layer {#ell}

### EOLL : Edge Orientation of the Last Layer {#eoll}

- [3x3x3 / CFOP / EOLL](/cube/method/NxNxN/original/3x3x3/cfop#eoll)

### EPLL : Edge Permutation of the Last Layer {#epll}

- permute 3 edges
  - clockwise except back edge : ( R' U' ) ( R U' ) ( R' U2 ) ( R )
    <div class="iframe-wrapper">
      <iframe
        scrolling="no"
        src="https://ruwix.com/widget/3d/?alg=R'%20U'%20R%20U'%20R'%20U2'%20R&colored=U*/em&solved=U-&hover=9&speed=500&flags=canvas"
      ></iframe>
    </div>
  - counterclockwise except back edge : ( L U ) ( L' U ) ( L U2 ) ( L' )
    <div class="iframe-wrapper">
      <iframe
        scrolling="no"
        src="https://ruwix.com/widget/3d/?alg=L%20U%20L'%20U%20L%20U2%20L'&colored=U*/em&solved=U-&hover=9&speed=500&flags=canvas"
      ></iframe>
    </div>



## CLL : Corners of the Last Layer {#cll}

### CPLL : Corner Permutation of the Last Layer {#cpll}

- permute 3 corners
  - clockwise except front left corner : ( U’ L’ ) ( U R ) ( U’ L ) ( U R’ )
    <div class="iframe-wrapper">
      <iframe
        scrolling="no"
        src="https://ruwix.com/widget/3d/?alg=U'%20L'%20U%20R%20U'%20L%20U%20R'&colored=U*&setupmoves=R%20D%20R'%20D'%20R%20D%20R'%20D'%20L%20D%20L'%20D'%20L%20D%20L'%20D'%20L%20D%20L'%20D'%20L%20D%20L'%20D'&solved=U-&hover=9&speed=500&flags=canvas"
      ></iframe>
    </div>
  - counterclockwise except front right corner : ( U R ) ( U’ L’ ) ( U R’ ) ( U’ L )
    <div class="iframe-wrapper">
      <iframe
        scrolling="no"
        src="https://ruwix.com/widget/3d/?alg=U%20R%20U'%20L'%20U%20R'%20U'%20L&colored=U*&setupmoves=R%20D%20R'%20D'%20R%20D%20R'%20D'%20L%20D%20L'%20D'%20L%20D%20L'%20D'%20L%20D%20L'%20D'%20L%20D%20L'%20D'&solved=U-&hover=9&speed=500&flags=canvas"
      ></iframe>
    </div>

### COLL : Corner Orientation of the Last Layer {#coll}

- orient front right corner : ( R' D' R D ) x 2
  <div class="iframe-wrapper">
    <iframe
      scrolling="no"
      src="https://ruwix.com/widget/3d/?alg=R'%20D'%20R%20D%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D&hover=9&speed=500&flags=canvas"
    ></iframe>
  </div>



## reference

- Speedsolving Wiki
  - [ELL](https://www.speedsolving.com/wiki/index.php/LLEF)
  - [CLL](https://www.speedsolving.com/wiki/index.php/Last_Four_Corners)
- [J Perm](https://jperm.net/3x3)
