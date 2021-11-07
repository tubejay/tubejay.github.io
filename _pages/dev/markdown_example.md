---
title: "markdown_example"
layout: single
toc: false
permalink: /dev/markdown_example
published: true
hidden: false
---

<br>

<font size="5">
  <b> text : style </b>
</font>

| style | language | syntax | output |
| :-    | :-       | :-     | :-     |
| italic | Markdown | `*italic*`{:.language-yaml .highlight} | *italic* |
|        | HTML     | `<i> italic </i>`{:.language-yaml .highlight} | <i> italic </i> |
|        | CSS      | `<font style="font-style:italic"> italic </font>`{:.language-yaml .highlight} | <font style="font-style:italic"> italic </font> |
| bold | Markdown | `**bold**`{:.language-yaml .highlight} | **bold** |
|      | HTML     | `<b> bold </b>`{:.language-yaml .highlight} | <b> bold </b> |
|      | CSS      | `<font style="font-weight:bold"> bold </font>`{:.language-yaml .highlight} | <font style="font-weight:bold"> bold </font> |
  
***
***

<font size="5">
  <b> text : line </b>
</font>

| line | language | syntax | output |
| :-   | :-       | :-     | :-     |
| underline | HTML | `<u> underline </u>`{:.language-yaml .highlight} | <u> underline </u> |
|           | CSS  | `<font style="text-decoration:underline"> underline </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline"> underline </font> |
| strike | HTML | `<s> strike </s>`{:.language-yaml .highlight} | <s> strike </s> |
|        | CSS  | `<font style="text-decoration:line-through"> strike </font>`{:.language-yaml .highlight} | <font style="text-decoration:line-through"> strike </font> |
| overline | CSS | `<font style="text-decoration:overline"> overline </font>`{:.language-yaml .highlight} | <font style="text-decoration:overline"> overline </font> |
| dotted | CSS | `<font style="text-decoration:underline dotted"> dotted </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline dotted"> dotted </font> |

***
***

<font size="5">
  <b> text : color </b>
</font>

| color | language | syntax | output |
| :-    | :-       | :-     | :-     |
| text | HTML | `<font color="yellow"> yellow </font>`{:.language-yaml .highlight} | <font color="yellow"> yellow </font> |
|      | CSS  | `<font style="color:yellow"> yellow </font>`{:.language-yaml .highlight} | <font style="color:yellow"> yellow </font> |
| background | CSS | `<font style="background-color:darkgray"> darkgray </font>`{:.language-yaml .highlight} | <font style="background-color:darkgray"> darkgray </font> |

***
***

<font size="5">
  <b> structure : heading </b>
</font>

```text
# level 1
## level 2
### level 3
```

***
***

<font size="5">
  <b> structure : blockquote </b>
</font>

```text
> level 1
>> level 2
>>> level 3
```
> level 1
>> level 2
>>> level 3

***
***

<font size="5">
  <b> structure : list </b>
</font>

```text
- unordered
  - AAA
    - aaa
      - zzz
      - yyy
    - bbb
    - ccc
  - BBB
  - CCC
- ordered
  1. first
    11. one
    13. two
    15. three
  3. second
  5. third
- checkbox
  - [ ] unchecked
  - [x] checked
```
- unordered
  - AAA
    - aaa
      - zzz
      - yyy
    - bbb
    - ccc
  - BBB
  - CCC
- ordered
  1. first
    11. one
    13. two
    15. three
  3. second
  5. third
- checkbox
  - [ ] unchecked
  - [x] checked

***
***

<font size="5">
  <b> structure : table </b>
</font>

```text
| left              | center               | right             |
| :-                | :-:                  | -:                |
| text              | text                 | text              |
| left_left_left    | center_center_center | right_right_right |
| first <br> second |                      |                   |
```

| left              | center               | right             |
| :-                | :-:                  | -:                |
| text              | text                 | text              |
| left_left_left    | center_center_center | right_right_right |
| first <br> second |                      |                   |

***

<font size="5">
  <b> code : inline </b>
</font>

```text
inline code `SELECT * FROM t` shown
```
inline code `SELECT * FROM t`{:.language-yaml .highlight} shown

***
***

<font size="5">
  <b> code : block </b>
</font>

```text
``
```python
print('one')
print('two')
```
``
```
```python
print('one')
print('two')
```

***
***

<font size="5">
  <b> emoji : square </b>
</font>

| syntax | symbol |
| :- | :-: |
| `:red_square:`{:.language-yaml .highlight} | 🟥 |
| `:orange_square:`{:.language-yaml .highlight} | 🟧 |
| `:yellow_square:`{:.language-yaml .highlight} | 🟨 |
| `:green_square:`{:.language-yaml .highlight} | 🟩 |
| `:blue_square:`{:.language-yaml .highlight} | 🟦 |
| `:purple_square:`{:.language-yaml .highlight} | 🟪 |
| `:brown_square:`{:.language-yaml .highlight} | 🟫 |
| `:white_large_square:`{:.language-yaml .highlight} | ⬜ |
| `:black_large_square:`{:.language-yaml .highlight} | ⬛ |

***
***

<font size="5">
  <b> emoji : circle </b>
</font>

| syntax | symbol |
| :- | :-: |
| `:red_circle:`{:.language-yaml .highlight} | 🔴 |
| `:orange_circle:`{:.language-yaml .highlight} | 🟠 |
| `:yellow_circle:`{:.language-yaml .highlight} | 🟡 |
| `:green_circle:`{:.language-yaml .highlight} | 🟢 |
| `:large_blue_circle:`{:.language-yaml .highlight} | 🔵 |
| `:purple_circle:`{:.language-yaml .highlight} | 🟣 |
| `:brown_circle:`{:.language-yaml .highlight} | 🟤 |
| `:white_circle:`{:.language-yaml .highlight} | ⚪ |
| `:black_circle:`{:.language-yaml .highlight} | ⚫ |

***
***

<font size="5">
  <b> image </b>
</font>

```text
[GitHub][github_mark]

![GitHub][github_mark]{:width="50%"}

[github_mark]: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
```
[GitHub][github_mark]

![GitHub][github_mark]{:width="50%"}

[github_mark]: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
