---
title: "markdown_example"
layout: single
toc: true
permalink: /dev/markdown_example
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>

## text

### emphasis

| emphasis | language | syntax | output |
| :-       | :-       | :-     | :-     |
| italic | Markdown | `*italic*`{:.language-text .highlight} | *italic* |
|        | HTML     | `<i> italic </i>`{:.language-html .highlight} | <i> italic </i> |
|        | CSS      | `<span style="font-style:italic"> italic </span>`{:.language-html .highlight} | <span style="font-style:italic"> italic </span> |
| bold | Markdown | `**bold**`{:.language-text .highlight} | **bold** |
|      | HTML     | `<b> bold </b>`{:.language-html .highlight} | <b> bold </b> |
|      | CSS      | `<span style="font-weight:bold"> bold </span>`{:.language-html .highlight} | <span style="font-weight:bold"> bold </span> |

### color

| color | language | syntax | output |
| :-    | :-       | :-     | :-     |
| text | HTML | `<font color="yellow"> yellow </font>`{:.language-html .highlight} | <font color="yellow"> yellow </font> |
|      | CSS  | `<span style="color:yellow"> yellow </span>`{:.language-html .highlight} | <span style="color:yellow"> yellow </span> |
| background | CSS | `<span style="background-color:purple"> purple </span>`{:.language-html .highlight} | <span style="background-color:purple"> purple </span> |
| text+background | CSS | `<span style="color:black; background:white;"> black+white </span>`{:.language-html .highlight} | <span style="color:black; background:white;"> black+white </span> |

## decoration

### text

| text | language | syntax | output |
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

## structure

### heading

```markdown
# level 1
## level 2
### level 3
```

### blockquote

```markdown
> level 1
>> level 2
>>> level 3
```
> level 1
>> level 2
>>> level 3

### list

#### unordered list

```markdown
- AAA
  - aaa
    - zzz
  - bbb
- BBB
```
- AAA
  - aaa
    - zzz
  - bbb
- BBB

#### ordered list

```markdown
1. first
3. second
5. third
```
1. first
3. second
5. third

#### checkbox

```markdown
- [ ] unchecked
- [x] checked
```
- [ ] unchecked
- [x] checked

### table

#### alignment

```markdown
| left              | center               | right             |
| :-                | :-:                  | -:                |
| text              | text                 | text              |
| left_left_left    | center_center_center | right_right_right |
```

| left              | center               | right             |
| :-                | :-:                  | -:                |
| text              | text                 | text              |
| left_left_left    | center_center_center | right_right_right |

#### more

- [Tables Generator](https://www.tablesgenerator.com/html_tables){:target="\_blank"}

### details

```html
<details>
<summary> fold/unfold </summary>
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

```markdown
inline code `print(os.getcwd()`{:.language-python .highlight} shown
```
inline code `print(os.getcwd()`{:.language-python .highlight} shown

### block

````markdown
```python
import os
print(os.getcwd())
```
````

```python
import os
print(os.getcwd())
```

## insert

### link

#### title

| title | syntax | output |
| :-    | :-     | :-     |
| with title    | `[title](https://github.com/)`{:.language-markdown .highlight} | [title](https://github.com/) |
| without title | `<https://github.com/>`{:.language-markdown .highlight} | <https://github.com/> |

#### target

| target | syntax | output |
| :-     | :-     | :-     |
| self  | `[self](https://github.com/){:target="_self"}`{:.language-markdown .highlight} | [self](https://github.com/){:target="\_self"} |
| blank | `[blank](https://github.com/){:target="_blank"}`{:.language-markdown .highlight} | [blank](https://github.com/){:target="\_blank"} |

#### url

```markdown
[inline](https://github.com/) | [reference][github_mark]

[github_mark]: https://github.com/
```
[inline](https://github.com/) | [reference][github_mark]

[github_mark]: https://github.com/

### emoji

| color  | square | circle |
| :-     | :-     | :-     |
| red    | 🟥 `:red_square:`{:language-yaml .highlight}         | 🔴 `:red_circle:`{:.language-markdown .highlight}        |
| orange | 🟧 `:orange_square:`{:.language-markdown .highlight}      | 🟠 `:orange_circle:`{:.language-markdown .highlight}     |
| yellow | 🟨 `:yellow_square:`{:.language-markdown .highlight}      | 🟡 `:yellow_circle:`{:.language-markdown .highlight}     |
| green  | 🟩 `:green_square:`{:.language-markdown .highlight}       | 🟢 `:green_circle:`{:.language-markdown .highlight}      |
| blue   | 🟦 `:blue_square:`{:.language-markdown .highlight}        | 🔵 `:large_blue_circle:`{:.language-markdown .highlight} |
| purple | 🟪 `:purple_square:`{:.language-markdown .highlight}      | 🟣 `:purple_circle:`{:.language-markdown .highlight}     |
| brown  | 🟫 `:brown_square:`{:.language-markdown .highlight}       | 🟤 `:brown_circle:`{:.language-markdown .highlight}      |
| white  | ⬜ `:white_large_square:`{:.language-markdown .highlight} | ⚪ `:white_circle:`{:.language-markdown .highlight}      |
| black  | ⬛ `:black_large_square:`{:.language-markdown .highlight} | ⚫ `:black_circle:`{:.language-markdown .highlight}      |

### image

```markdown
![GitHub](https://bit.ly/3kteNDj){:width="50%"}
```
![GitHub](https://bit.ly/3kteNDj){:width="50%"}
