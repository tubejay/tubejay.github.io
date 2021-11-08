---
title: "markdown_example"
layout: single
toc: true
permalink: /dev/markdown_example
published: true
hidden: false
---

## text

### emphasis

| emphasis | language | syntax | output |
| :-       | :-       | :-     | :-     |
| italic | Markdown | `*italic*`{:.language-yaml .highlight} | *italic* |
|        | HTML     | `<i> italic </i>`{:.language-yaml .highlight} | <i> italic </i> |
|        | CSS      | `<span style="font-style:italic"> italic </span>`{:.language-yaml .highlight} | <span style="font-style:italic"> italic </span> |
| bold | Markdown | `**bold**`{:.language-yaml .highlight} | **bold** |
|      | HTML     | `<b> bold </b>`{:.language-yaml .highlight} | <b> bold </b> |
|      | CSS      | `<span style="font-weight:bold"> bold </span>`{:.language-yaml .highlight} | <span style="font-weight:bold"> bold </span> |

### color

| color | language | syntax | output |
| :-    | :-       | :-     | :-     |
| text | HTML | `<font color="yellow"> yellow </font>`{:.language-yaml .highlight} | <font color="yellow"> yellow </font> |
|      | CSS  | `<div style="color:yellow"> yellow </div>`{:.language-yaml .highlight} | <div style="color:yellow"> yellow </div> |
| background | CSS | `<div style="background-color:purple"> purple </div>`{:.language-yaml .highlight} | <div style="background-color:purple"> purple </div> |
| text+background | CSS | `<div style="color:black; background:white;"> black+white </div>`{:.language-yaml .highlight} | <div style="color:black; background:white;"> black+white </div> |

### line

| property | value | language | syntax | output |
| :-       | :-    | :-       | :-     | :-     |
| line | underline | HTML | `<u> underline </u>`{:.language-yaml .highlight} | <u> underline </u> |
|      |           | CSS  | `<div style="text-decoration:underline"> underline </div>`{:.language-yaml .highlight} | <div style="text-decoration:underline"> underline </div> |
|      | strike    | HTML | `<s> strike </s>`{:.language-yaml .highlight} | <s> strike </s> |
|      |           | CSS  | `<div style="text-decoration:line-through"> strike </div>`{:.language-yaml .highlight} | <div style="text-decoration:line-through"> strike </div> |
|      | overline  | CSS | `<div style="text-decoration:overline"> overline </div>`{:.language-yaml .highlight} | <div style="text-decoration:overline"> overline </div> |
| style | solid  | CSS | `<div style="text-decoration:underline solid"> solid </div>`{:.language-yaml .highlight} | <div style="text-decoration:underline solid"> solid </div> |
|       | double | CSS | `<div style="text-decoration:underline double"> double </div>`{:.language-yaml .highlight} | <div style="text-decoration:underline double"> double </div> |
|       | dotted | CSS | `<div style="text-decoration:underline dotted"> dotted </div>`{:.language-yaml .highlight} | <div style="text-decoration:underline dotted"> dotted </div> |
|       | dashed | CSS | `<div style="text-decoration:underline dashed"> dashed </div>`{:.language-yaml .highlight} | <div style="text-decoration:underline dashed"> dashed </div> |
|       | wavy   | CSS | `<div style="text-decoration:underline wavy"> wavy </div>`{:.language-yaml .highlight} | <div style="text-decoration:underline wavy"> wavy </div> |
| color | currentColor | CSS | `<div style="text-decoration:underline currentColor"> currentColor </div>`{:.language-yaml .highlight} | <div style="text-decoration:underline currentColor"> currentColor </div> |
|       | yellow       | CSS | `<div style="text-decoration:underline yellow"> yellow </div>`{:.language-yaml .highlight} | <div style="text-decoration:underline yellow"> yellow </div> |

## structure

### heading

```text
# level 1
## level 2
### level 3
```

### blockquote

```text
> level 1
>> level 2
>>> level 3
```
> level 1
>> level 2
>>> level 3

### list

```text
- unordered
  - AAA
    - aaa
      - zzz
    - bbb
  - BBB
- ordered
  1. first
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
    - bbb
  - BBB
- ordered
  1. first
  3. second
  5. third
- checkbox
  - [ ] unchecked
  - [x] checked

### table

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

## code

### inline

```text
inline code `SELECT * FROM t` shown
```
inline code `SELECT * FROM t`{:.language-yaml .highlight} shown

### block

````
```python
print('one')
print('two')
```
````

```python
print('one')
print('two')
```

## insert

### emoji

| color  | square | circle |
| :-     | :-     | :-     |
| red    | 🟥 `:red_square:`{:.language-yaml .highlight}         | 🔴 `:red_circle:`{:.language-yaml .highlight}        |
| orange | 🟧 `:orange_square:`{:.language-yaml .highlight}      | 🟠 `:orange_circle:`{:.language-yaml .highlight}     |
| yellow | 🟨 `:yellow_square:`{:.language-yaml .highlight}      | 🟡 `:yellow_circle:`{:.language-yaml .highlight}     |
| green  | 🟩 `:green_square:`{:.language-yaml .highlight}       | 🟢 `:green_circle:`{:.language-yaml .highlight}      |
| blue   | 🟦 `:blue_square:`{:.language-yaml .highlight}        | 🔵 `:large_blue_circle:`{:.language-yaml .highlight} |
| purple | 🟪 `:purple_square:`{:.language-yaml .highlight}      | 🟣 `:purple_circle:`{:.language-yaml .highlight}     |
| brown  | 🟫 `:brown_square:`{:.language-yaml .highlight}       | 🟤 `:brown_circle:`{:.language-yaml .highlight}      |
| white  | ⬜ `:white_large_square:`{:.language-yaml .highlight} | ⚪ `:white_circle:`{:.language-yaml .highlight}      |
| black  | ⬛ `:black_large_square:`{:.language-yaml .highlight} | ⚫ `:black_circle:`{:.language-yaml .highlight}      |

### link/image

```text
[GitHub][github_mark]

![GitHub][github_mark]{:width="50%"}

[github_mark]: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
```
[GitHub][github_mark]

![GitHub][github_mark]{:width="50%"}

[github_mark]: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
