---
title: Black
layout: single
toc: true
permalink: /dev/vs_code/personalize/color_theme/black
published: true
hidden: false
---

<head>
  <base target="_blank">
</head>



## Note

Use [code sample](https://www.tensorflow.org/guide/keras/functional#training_evaluation_and_inference).

```python
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



## [Deepdark Material Theme](https://marketplace.visualstudio.com/items?itemName=Nimda.deepdark-material)

![image](https://user-images.githubusercontent.com/92285528/141643004-9d628161-569b-4d2a-81ae-31ea67531a7e.png)



## [blackai-theme](https://marketplace.visualstudio.com/items?itemName=asilverio.blackai-visual-studio-code)

![image](https://user-images.githubusercontent.com/92285528/141642978-b0ce1d3c-c041-4493-9dd1-5e202b2de150.png)



## [Monokai-Contrast Theme](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-Monokai-Contrast)

![image](https://user-images.githubusercontent.com/92285528/141643026-2750b814-410b-49f2-bbf0-fffc3935eca7.png)



## [blackbird](https://marketplace.visualstudio.com/items?itemName=MattGleich.theme-blackbird)

![image](https://user-images.githubusercontent.com/92285528/141642986-c63e6609-7179-4552-a2b9-e182c414579c.png)



## [Noctis High Contrast](https://marketplace.visualstudio.com/items?itemName=Kamen.noctis-high-contrast)

![image](https://user-images.githubusercontent.com/92285528/141643039-26f4f09f-ee43-4ae7-aa96-0a78e2e285e1.png)
