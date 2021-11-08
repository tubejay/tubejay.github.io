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
|      | CSS  | `<span style="color:yellow"> yellow </span>`{:.language-yaml .highlight} | <span style="color:yellow"> yellow </span> |
| background | CSS | `<span style="background-color:purple"> purple </span>`{:.language-yaml .highlight} | <span style="background-color:purple"> purple </span> |
| text+background | CSS | `<span style="color:black; background:white;"> black+white </span>`{:.language-yaml .highlight} | <span style="color:black; background:white;"> black+white </span> |

### line

| property | value | language | syntax | output |
| :-       | :-    | :-       | :-     | :-     |
| line | underline | HTML | `<u> underline </u>`{:.language-yaml .highlight} | <u> underline </u> |
|      |           | CSS  | `<span style="text-decoration:underline"> underline </span>`{:.language-yaml .highlight} | <span style="text-decoration:underline"> underline </span> |
|      | strike    | HTML | `<s> strike </s>`{:.language-yaml .highlight} | <s> strike </s> |
|      |           | CSS  | `<span style="text-decoration:line-through"> strike </span>`{:.language-yaml .highlight} | <span style="text-decoration:line-through"> strike </span> |
|      | overline  | CSS | `<span style="text-decoration:overline"> overline </span>`{:.language-yaml .highlight} | <span style="text-decoration:overline"> overline </span> |
| style | solid  | CSS | `<span style="text-decoration:underline solid"> solid </span>`{:.language-yaml .highlight} | <span style="text-decoration:underline solid"> solid </span> |
|       | double | CSS | `<span style="text-decoration:underline double"> double </span>`{:.language-yaml .highlight} | <span style="text-decoration:underline double"> double </span> |
|       | dotted | CSS | `<span style="text-decoration:underline dotted"> dotted </span>`{:.language-yaml .highlight} | <span style="text-decoration:underline dotted"> dotted </span> |
|       | dashed | CSS | `<span style="text-decoration:underline dashed"> dashed </span>`{:.language-yaml .highlight} | <span style="text-decoration:underline dashed"> dashed </span> |
|       | wavy   | CSS | `<span style="text-decoration:underline wavy"> wavy </span>`{:.language-yaml .highlight} | <span style="text-decoration:underline wavy"> wavy </span> |
| color | currentColor | CSS | `<span style="text-decoration:underline currentColor"> currentColor </span>`{:.language-yaml .highlight} | <span style="text-decoration:underline currentColor"> currentColor </span> |
|       | yellow       | CSS | `<span style="text-decoration:underline yellow"> yellow </span>`{:.language-yaml .highlight} | <span style="text-decoration:underline yellow"> yellow </span> |

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

### details

```text
<details>
<summary>fold/unfold</summary>
<div markdown="1">
- hidden item 1
- hidden item 2
</div>
</details>
```
<details>
<summary>fold/unfold</summary>
<div markdown="1">
- hidden item 1
- hidden item 2
</div>
</details>

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
