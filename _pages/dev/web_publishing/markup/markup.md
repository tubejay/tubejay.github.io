---
title: Markup
layout: single
toc: true
permalink: /dev/web_publishing/markup
published: true
hidden: false
---

<head>
  <base target="_blank">
  <script type="text/javascript" defer>
    // https://stackoverflow.com/a/8422749

    const iframeLoader = document.createElement("div");

    const testEl = document.querySelector("#test");
    testEl.appendChild(iframeLoader);

    const iframeSrc = "https://codebeautify.org/css-to-scss-converter";
    iframeLoader.innerHTML = `<iframe src="${iframeSrc}" width="100px" height="100px"></iframe>`;

    const iframeEl = document.querySelector("iframe");
    const iframeDoc = iframeEl.contentWindow.document;

    // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html
    const docEl = iframeDoc.body.querySelector(".EditSession").doc;

    testEl.appendChild(docEl);
      // https://stackoverflow.com/a/7570527
      // https://stackoverflow.com/a/42907951
      // iframeDoc.body.querySelector("#inputACEEditor")

    testEl.removeChild(iframeLoader);
  </script>
</head>



## HTML

- [ofcourse - HTML 입문](https://ofcourse.kr/html-course/HTML-%EC%9E%85%EB%AC%B8)
- [생활코딩 - HTML 기초](https://inf.run/MXTX)
- [기본을 확실히!! HTML의 모든 것](https://inf.run/fm2t)
- [W3Schools](https://www.w3schools.com/html/default.asp)
- [HTML.com](https://html.com/)
- [한눈에 보는 HTML 요소(Elements & Attributes) 총정리](https://heropy.blog/2019/05/26/html-elements/)



## CSS

###  basic

  - [ofcourse - CSS 입문](https://ofcourse.kr/css-course/CSS-%EC%9E%85%EB%AC%B8)
  - [CSS 기본부터 활용까지](https://inf.run/WNHj)
  - [WEB2 - CSS](https://inf.run/TcHg)
  - [CSS-Tricks](https://css-tricks.com/)
  - [W3Schools](https://www.w3schools.com/css/default.asp)
  - [HTML.com](https://html.com/css/)

### flex

  - [CSS flex, grid 속성 쉽게 이해하기](https://wisesilver.tistory.com/25#flex)
  - [이번에야말로 CSS Flex를 익혀보자](https://studiomeal.com/archives/197)
  - [CSS Flex 완벽 가이드](https://heropy.blog/2018/11/24/css-flexible-box/)

### grid

  - [CSS flex, grid 속성 쉽게 이해하기](https://wisesilver.tistory.com/25#grid)
  - [이번에야말로 CSS Grid를 익혀보자](https://studiomeal.com/archives/533)
  - [CSS Grid 완벽 가이드](https://heropy.blog/2019/08/17/css-grid/)



## Sass/SCSS

### basic

  - [Sass Basics](https://sass-lang.com/guide)
  - [Documentation](https://sass-lang.com/documentation/)
  - [Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)

### Online Converter

  - from CSS
    - [CSS to SCSS](https://codebeautify.org/css-to-scss-converter)
  - to CSS
    - [Sass to CSS](https://codebeautify.org/sass-to-css-converter)
    - [SCSS to CSS](https://codebeautify.org/scss-to-css-converter)
  - Sass/SCSS
    - [Sass to SCSS](https://codebeautify.org/sass-to-scss-converter)
    - [SCSS to Sass](https://codebeautify.org/scss-to-sass-converter)

<div id="test">
test : 
</div>



## HTML/CSS

- [모두의 HTML5 & CSS3](https://thebook.io/006943/)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [입문자에게 추천하는 HTML, CSS 첫걸음](https://heropy.blog/2019/04/24/html-css-starter/)



## [Font](/dev/font)



## Python

- [점프 투 장고](https://wikidocs.net/book/4223)
- [점프 투 플라스크](https://wikidocs.net/book/4542)
- [Best-of Web Development with Python](https://github.com/ml-tooling/best-of-web-python)
