---
title: Text
layout: single
toc: true
permalink: /dev/web_publishing/markdown/example/text
published: true
hidden: false
---

## emphasis

| emphasis | language | syntax | output |
| :-       | :-       | :-     | :-     |
| italic | Markdown | `*italic*`{:.language-text .highlight} | *italic* |
|        | HTML     | `<i> italic </i>`{:.language-html .highlight} | <i> italic </i> |
|        | CSS      | `<span style="font-style:italic"> italic </span>`{:.language-html .highlight} | <span style="font-style:italic"> italic </span> |
| bold | Markdown | `**bold**`{:.language-text .highlight} | **bold** |
|      | HTML     | `<b> bold </b>`{:.language-html .highlight} | <b> bold </b> |
|      | CSS      | `<span style="font-weight:bold"> bold </span>`{:.language-html .highlight} | <span style="font-weight:bold"> bold </span> |

## color

| color | language | syntax | output |
| :-    | :-       | :-     | :-     |
| text | HTML | `<font color="yellow"> yellow </font>`{:.language-html .highlight} | <font color="yellow"> yellow </font> |
|      | CSS  | `<span style="color:yellow"> yellow </span>`{:.language-html .highlight} | <span style="color:yellow"> yellow </span> |
| background | CSS | `<span style="background-color:purple"> purple </span>`{:.language-html .highlight} | <span style="background-color:purple"> purple </span> |
| text+background | CSS | `<span style="color:black; background:white;"> black+white </span>`{:.language-html .highlight} | <span style="color:black; background:white;"> black+white </span> |

## decoration

### line

| line | language | syntax | output |
| :-   | :-       | :-     | :-     |
| underline | HTML | `<u> underline </u>`{:.language-html .highlight} | <u> underline </u> |
|           | CSS  | `<span style="text-decoration:underline"> underline </span>`{:.language-html .highlight} | <span style="text-decoration:underline"> underline </span> |
| strike    | HTML | `<s> strike </s>`{:.language-html .highlight} | <s> strike </s> |
|           | CSS  | `<span style="text-decoration:line-through"> strike </span>`{:.language-html .highlight} | <span style="text-decoration:line-through"> strike </span> |
| overline  | CSS | `<span style="text-decoration:overline"> overline </span>`{:.language-html .highlight} | <span style="text-decoration:overline"> overline </span> |

### style

| style | language | syntax | output |
| :-    | :-       | :-     | :-     |
| solid  | CSS | `<span style="text-decoration:underline solid"> solid </span>`{:.language-html .highlight} | <span style="text-decoration:underline solid"> solid </span> |
| double | CSS | `<span style="text-decoration:underline double"> double </span>`{:.language-html .highlight} | <span style="text-decoration:underline double"> double </span> |
| dotted | CSS | `<span style="text-decoration:underline dotted"> dotted </span>`{:.language-html .highlight} | <span style="text-decoration:underline dotted"> dotted </span> |
| dashed | CSS | `<span style="text-decoration:underline dashed"> dashed </span>`{:.language-html .highlight} | <span style="text-decoration:underline dashed"> dashed </span> |
| wavy   | CSS | `<span style="text-decoration:underline wavy"> wavy </span>`{:.language-html .highlight} | <span style="text-decoration:underline wavy"> wavy </span> |

### color
       
| color | language | syntax | output |
| :-    | :-       | :-     | :-     |
| currentColor | CSS | `<span style="text-decoration:underline currentColor"> currentColor </span>`{:.language-html .highlight} | <span style="text-decoration:underline currentColor"> currentColor </span> |
| yellow       | CSS | `<span style="text-decoration:underline yellow"> yellow </span>`{:.language-html .highlight} | <span style="text-decoration:underline yellow"> yellow </span> |
