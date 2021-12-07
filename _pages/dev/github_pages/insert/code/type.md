---
title     : Type
layout    : single
toc       : true
permalink : /dev/github_pages/insert/code/type
published : true
hidden    : false
---

<head>
  <base target="_blank">
</head>



## fenced code block

- [code sample](https://www.tensorflow.org/guide/keras/functional#training_evaluation_and_inference)
- [GitHub Docs](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting)
- [all Languages known to GitHub](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)

### syntax

````
```python
from tensorflow import keras
from tensorflow.keras import model

(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

x_train = x_train.reshape(60000, 784).astype("float32") / 255
x_test  = x_test.reshape(10000, 784).astype("float32") / 255

model.compile(
    loss      = keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer = keras.optimizers.RMSprop(),
    metrics   = ["accuracy"],
)

history = model.fit(x_train, y_train, batch_size=64, epochs=2, validation_split=0.2)

test_scores = model.evaluate(x_test, y_test, verbose=2)
print("Test loss:", test_scores[0])
print("Test accuracy:", test_scores[1])
```
````

### output

```python
from tensorflow import keras
from tensorflow.keras import model

(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

x_train = x_train.reshape(60000, 784).astype("float32") / 255
x_test  = x_test.reshape(10000, 784).astype("float32") / 255

model.compile(
    loss      = keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer = keras.optimizers.RMSprop(),
    metrics   = ["accuracy"],
)

history = model.fit(x_train, y_train, batch_size=64, epochs=2, validation_split=0.2)

test_scores = model.evaluate(x_test, y_test, verbose=2)
print("Test loss:", test_scores[0])
print("Test accuracy:", test_scores[1])
```



## inline code span

- [GitHub Docs](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-code)
- [Stack Overflow](https://stackoverflow.com/questions/23226224/inline-code-syntax-highlighting-in-github-markdown)

### syntax

```
Inline code `from tensorflow import keras`{:.language-python .highlight} is shown.
```

### output

- Inline code `from tensorflow import keras`{:.language-python .highlight} is shown.
