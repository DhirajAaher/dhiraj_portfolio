import tensorflow as tf 
from tensorflow import keras 
import matplotlib.pyplot as plt 
# Load Fashion MNIST dataset 
fashion_mnist = keras.datasets.fashion_mnist 
(x_train, y_train), (x_test, y_test) = fashion_mnist.load_data() 
# Normalize pixel values (0-255 to 0-1) and reshape for CNN 
x_train, x_test = x_train / 255.0, x_test / 255.0 
x_train = x_train.reshape(-1, 28, 28, 1)  # Add channel dimension 
x_test = x_test.reshape(-1, 28, 28, 1) 
# Define the CNN model 
model = keras.Sequential([ 
keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(28, 28, 1)), 
keras.layers.MaxPooling2D(2,2), 
keras.layers.Conv2D(64, (3,3), activation='relu'), 
keras.layers.MaxPooling2D(2,2), 
keras.layers.Flatten(), 
keras.layers.Dense(128, activation='relu'), 
keras.layers.Dense(10, activation='softmax')  # 10 classes for clothing categories 
]) 
# Compile the model 
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', 
metrics=['accuracy']) 
# Train the model 
history = model.fit(x_train, y_train, epochs=10, batch_size=32, validation_split=0.2) 
# Evaluate on test data 
test_loss, test_acc = model.evaluate(x_test, y_test) 
print(f"Test Accuracy: {test_acc:.2f}") 
# Predict sample images 
predictions = model.predict(x_test[:5]) 
print(predictions.argmax(axis=1))  # Print predicted class labels