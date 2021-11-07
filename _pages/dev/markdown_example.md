---
title: "markdown_example"
layout: single
toc: false
permalink: /dev/markdown_example
published: true
hidden: false
---

## text

### style

| style | language | syntax | output |
| :-    | :-       | :-     | :-     |
| italic | Markdown | `*italic*`{:.language-yaml .highlight} | *italic* |
|        | HTML     | `<i> italic </i>`{:.language-yaml .highlight} | <i> italic </i> |
|        | CSS      | `<font style="font-style:italic"> italic </font>`{:.language-yaml .highlight} | <font style="font-style:italic"> italic </font> |
| bold | Markdown | `**bold**`{:.language-yaml .highlight} | **bold** |
|      | HTML     | `<b> bold </b>`{:.language-yaml .highlight} | <b> bold </b> |
|      | CSS      | `<font style="font-weight:bold"> bold </font>`{:.language-yaml .highlight} | <font style="font-weight:bold"> bold </font> |

### color

| color | language | syntax | output |
| :-    | :-       | :-     | :-     |
| text | HTML | `<font color="yellow"> yellow </font>`{:.language-yaml .highlight} | <font color="yellow"> yellow </font> |
|      | CSS  | `<font style="color:yellow"> yellow </font>`{:.language-yaml .highlight} | <font style="color:yellow"> yellow </font> |
| background | CSS | `<font style="background-color:purple"> purple </font>`{:.language-yaml .highlight} | <font style="background-color:purple"> purple </font> |
| text+background | CSS | `<font style="color:black; background:white;"> black+white </font>`{:.language-yaml .highlight} | <font style="color:black; background:white;"> black+white </font> |

### line

| property | value | language | syntax | output |
| :-       | :-   | :-       | :-     | :-     |
| line | underline | HTML | `<u> underline </u>`{:.language-yaml .highlight} | <u> underline </u> |
|      |           | CSS  | `<font style="text-decoration:underline"> underline </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline"> underline </font> |
|      | strike    | HTML | `<s> strike </s>`{:.language-yaml .highlight} | <s> strike </s> |
|      |           | CSS  | `<font style="text-decoration:line-through"> strike </font>`{:.language-yaml .highlight} | <font style="text-decoration:line-through"> strike </font> |
|      | overline  | CSS | `<font style="text-decoration:overline"> overline </font>`{:.language-yaml .highlight} | <font style="text-decoration:overline"> overline </font> |
| style | solid  | CSS | `<font style="text-decoration:underline solid"> solid </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline solid"> solid </font> |
|       | double | CSS | `<font style="text-decoration:underline double"> double </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline double"> double </font> |
|       | dotted | CSS | `<font style="text-decoration:underline dotted"> dotted </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline dotted"> dotted </font> |
|       | dashed | CSS | `<font style="text-decoration:underline dashed"> dashed </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline dashed"> dashed </font> |
|       | wavy   | CSS | `<font style="text-decoration:underline wavy"> wavy </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline wavy"> wavy </font> |
| color | currentColor | CSS | `<font style="text-decoration:underline currentColor"> currentColor </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline currentColor"> currentColor </font> |
|       | yellow       | CSS | `<font style="text-decoration:underline yellow"> yellow </font>`{:.language-yaml .highlight} | <font style="text-decoration:underline yellow"> yellow </font> |

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
      - yyy
    - bbb
    - ccc
  - BBB
  - CCC
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
      - yyy
    - bbb
    - ccc
  - BBB
  - CCC
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
