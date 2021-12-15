---
title: Dark
layout: single
toc: true
permalink: /dev/vs_code/personalize/color_theme/dark
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



## [Rainbow Theme](https://marketplace.visualstudio.com/items?itemName=Saikumarchinna.rainbow)

![image](https://user-images.githubusercontent.com/92285528/141643050-16e87a17-7a06-40de-916f-e068ee6ce3ca.png)



## [Base16 Tomorrow Dark+](https://marketplace.visualstudio.com/items?itemName=emily-curry.base16-tomorrow-dark-vscode)

![image](https://user-images.githubusercontent.com/92285528/141643073-05c5f05a-8a2e-4207-8fa4-2e1296bcfc7e.png)



## [1337 Theme](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-1337)

![image](https://user-images.githubusercontent.com/92285528/141642958-1445b376-b20e-4494-bc99-9d1297d94c07.png)



## [Brogrammer Theme](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-Brogrammer)

![image](https://user-images.githubusercontent.com/92285528/141642993-ddeb9b39-5a7d-496c-9204-93bfdfdc1fd0.png)



## [Monokai Vibrant](https://marketplace.visualstudio.com/items?itemName=s3gf4ult.monokai-vibrant)

![image](https://user-images.githubusercontent.com/92285528/141643018-6c60a8d2-70ba-4092-910a-7224a4737cd5.png)
