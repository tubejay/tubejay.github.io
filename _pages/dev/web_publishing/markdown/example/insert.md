---
title: Insert
layout: single
toc: true
permalink: /dev/web_publishing/markdown/example/insert
published: true
hidden: false
---

## details

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
  <summary> fold/unfold </summary>
  <div markdown="1">
    - hidden item 1
    - hidden item 2
  </div>
</details>

## code

### inline

```markdown
inline code `print(os.getcwd())`{:.language-python .highlight} shown
```
inline code `print(os.getcwd())`{:.language-python .highlight} shown

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

## link

### title

| title | syntax | output |
| :-    | :-     | :-     |
| with title    | `[title](https://github.com/)`{:.language-markdown .highlight} | [title](https://github.com/){:target="\_blank"} |
| without title | `<https://github.com/>`{:.language-markdown .highlight} | <https://github.com/>{:target="\_blank"} |

### target

| target | syntax | output |
| :-     | :-     | :-     |
| self  | `[self](https://github.com/){:target="_self"}`{:.language-markdown .highlight} | [self](https://github.com/){:target="\_self"} |
| blank | `[blank](https://github.com/){:target="_blank"}`{:.language-markdown .highlight} | [blank](https://github.com/){:target="\_blank"} |

### url

```markdown
[inline](https://github.com/) | [reference][github_mark]

[github_mark]: https://github.com/
```
[inline](https://github.com/){:target="\_blank"} | [reference][github_mark]{:target="\_blank"}

[github_mark]: https://github.com/

## emoji

| color  | square | circle |
| :-     | :-     | :-     |
| red    | 🟥 `:red_square:`{:language-yaml .highlight}          | 🔴 `:red_circle:`{:.language-yaml .highlight}        |
| orange | 🟧 `:orange_square:`{:.language-yaml .highlight}      | 🟠 `:orange_circle:`{:.language-yaml .highlight}     |
| yellow | 🟨 `:yellow_square:`{:.language-yaml .highlight}      | 🟡 `:yellow_circle:`{:.language-yaml .highlight}     |
| green  | 🟩 `:green_square:`{:.language-yaml .highlight}       | 🟢 `:green_circle:`{:.language-yaml .highlight}      |
| blue   | 🟦 `:blue_square:`{:.language-yaml .highlight}        | 🔵 `:large_blue_circle:`{:.language-yaml .highlight} |
| purple | 🟪 `:purple_square:`{:.language-yaml .highlight}      | 🟣 `:purple_circle:`{:.language-yaml .highlight}     |
| brown  | 🟫 `:brown_square:`{:.language-yaml .highlight}       | 🟤 `:brown_circle:`{:.language-yaml .highlight}      |
| white  | ⬜ `:white_large_square:`{:.language-yaml .highlight} | ⚪ `:white_circle:`{:.language-yaml .highlight}      |
| black  | ⬛ `:black_large_square:`{:.language-yaml .highlight} | ⚫ `:black_circle:`{:.language-yaml .highlight}      |

## image

```markdown
![GitHub](https://bit.ly/3kteNDj){:width="50%"}
```
![GitHub](https://bit.ly/3kteNDj){:width="50%"}
