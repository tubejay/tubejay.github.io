---
title: Font
layout: single
toc: false
permalink: /dev/font
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>

## Recommended

- [Cascadia Code](https://github.com/microsoft/cascadia-code)
<div style="font-family: 'Cascadia Code'" markdown="1">
```
from tensorflow import keras
from tensorflow.keras import model

(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

x_train = x_train.reshape(60000, 784).astype("float32") / 255
x_test = x_test.reshape(10000, 784).astype("float32") / 255

model.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer=keras.optimizers.RMSprop(),
    metrics=["accuracy"],
)

history = model.fit(x_train, y_train, batch_size=64, epochs=2, validation_split=0.2)

test_scores = model.evaluate(x_test, y_test, verbose=2)
print("Test loss:", test_scores[0])
print("Test accuracy:", test_scores[1])
```
</div>
- [IBM Plex](https://www.ibm.com/plex/)
<div style="font-family: 'IBM Plex Serif'" markdown="1">
```
from tensorflow import keras
from tensorflow.keras import model

(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

x_train = x_train.reshape(60000, 784).astype("float32") / 255
x_test = x_test.reshape(10000, 784).astype("float32") / 255

model.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer=keras.optimizers.RMSprop(),
    metrics=["accuracy"],
)

history = model.fit(x_train, y_train, batch_size=64, epochs=2, validation_split=0.2)

test_scores = model.evaluate(x_test, y_test, verbose=2)
print("Test loss:", test_scores[0])
print("Test accuracy:", test_scores[1])
```
</div>
  
## Compare

- [Programming Fonts](https://www.programmingfonts.org/)
- [Dev Fonts](https://devfonts.gafi.dev/)

## License

- [SIL Open Font License](https://scripts.sil.org/cms/scripts/page.php?id=OFL)
- [Apache License](http://www.apache.org/licenses/LICENSE-2.0.html)

