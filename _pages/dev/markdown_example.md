---
title: "markdown_example"
layout: single
toc: false
permalink: /dev/markdown_example
published: true
hidden: false
---

<br>

| format | syntax | output |
| :-     | :-     | :-     |
| italic | `*italic*` | *italic* |
|        | `<i> italic </i>` | <i> italic </i> |
|        | `<font style=italic> italic </font>` | <font style=italic> italic </font> |
| bold | `**bold**` | **bold** |
|      | `<b> bold </b>` | <b> bold </b> |
|      | <font style=bold> bold </font> | <font style=bold> bold </font> |
| underline | <u> underline </u> | <u> underline </u> |
| strike | <s> strike </s> | <s> strike </s> |

```text
*italic*
<i> italic </i>
**bold**
<b> bold </b>
<U> underline </U>
<s> strike </s>
```
- *italic*
- <i> italic </i>
- **bold**
- <b> bold </b>
- <U> underline </U>
- <s> strike </s>

***
***

```text
<font color='blue'> color='blue' </font>
<font style='background-color:gray'> background-color='gray' </font>  
<font style='color:blue; background-color:white; font-weight:bold'> style='color:blue; background-color:white; font-weight:bold' </font>
```
- <font color='blue'> color='blue' </font>
- <font style='background-color:gray'> background-color='gray' </font>
- <font style='color:blue; background-color:white; font-weight:bold'> style='color:blue; background-color:white; font-weight:bold' </font>

***
***

```text
# level 1
## level 2
### level 3
```
# level 1
## level 2
### level 3

***
***

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

```text
1. first
3. second
5. third
```
1. first
3. second
5. third

***
***

```text
- AAA
  - aaa
- BBB
  - [ ] to do
  - [x] done
- CCC
```
- AAA
  - aaa
- BBB
  - [ ] to do
  - [x] done
- CCC

***
***

```text
| left | center | right |
| :-   | :-:    | -:    |
| text | text   | text  |
| left<br>left_left_left | center<br>center_center_center | right<br>right_right_right |
```

| left | center | right |
| :-   | :-:    | -:    |
| text | text   | text  |
| left<br>left_left_left | center<br>center_center_center | right<br>right_right_right |

***

```text
inline code `SELECT * FROM t` shown
```
inline code `SELECT * FROM t`{:.language-yaml .highlight} shown

***
***

```python
print('one')
print('two')
```

***
***

```text
[GitHub][github_logo]
![GitHub][github_logo]{width=200}
[github_logo]: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/1200px-GitHub_logo_2013.svg.png
```
[GitHub][github_logo]
![GitHub][github_logo]{width=200}
[github_logo]: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/1200px-GitHub_logo_2013.svg.png

***
***

| syntax | symbol |
| :- | :-: |
| `:red_square:` | 🟥 |
| `:orange_square:` | 🟧 |
| `:yellow_square:` | 🟨 |
| `:green_square:` | 🟩 |
| `:blue_square:` | 🟦 |
| `:purple_square:` | 🟪 |
| `:brown_square:` | 🟫 |
| `:white_large_square:` | ⬜ |
| `:black_large_square:` | ⬛ |

***
***

| syntax | symbol |
| :- | :-: |
| `:red_circle:` | 🔴 |
| `:orange_circle:` | 🟠 |
| `:yellow_circle:` | 🟡 |
| `:green_circle:` | 🟢 |
| `:large_blue_circle:` | 🔵 |
| `:purple_circle:` | 🟣 |
| `:brown_circle:` | 🟤 |
| `:white_circle:` | ⚪ |
| `:black_circle:` | ⚫ |
