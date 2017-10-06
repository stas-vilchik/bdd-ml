import math
import csv
import tensorflow as tf
import numpy as np
from sklearn.model_selection import train_test_split
import datetime

tf.set_random_seed(0)

data = []
with open('image_and_complexity.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        data.append(row)

data = np.array(data)
data = data.astype(np.int)

labels = data[:, 0]
labels = [[1 if label < 6 else 0, 1 if 6 <= label < 13 else 0, 1 if 13 <= label else 0] for label in labels]

tokens_length = 107

inputs = []
for row in data[:, 1:]:
    inputs.append(row - 1)

X_train, X_test, y_train, y_test = train_test_split(inputs, labels, test_size=0.33, random_state=42)


def next_batch(num, data, labels):
    idx = np.arange(0, len(data))
    np.random.shuffle(idx)
    idx = idx[:num]
    data_shuffle = [data[i] for i in idx]
    labels_shuffle = [labels[i] for i in idx]

    return np.asarray(data_shuffle), np.asarray(labels_shuffle)


x = tf.placeholder(tf.int32, [None, 1024])
xx = tf.one_hot(indices=x, depth=tokens_length, on_value=1.0, off_value=0.0, axis=-1)
xxx = tf.reshape(xx, [-1, 1024, tokens_length, 1])

y_ = tf.placeholder(tf.float32, [None, 3])  # answers
lr = tf.placeholder(tf.float32)

W1 = tf.Variable(tf.truncated_normal([4, tokens_length, 1, 4], stddev=0.1))
B1 = tf.Variable(tf.ones([4]) / 10)
stride = 1
Y1 = tf.nn.relu(tf.nn.conv2d(xxx, W1, strides=[1, stride, stride, 1], padding='SAME') + B1)

fully_connected_size = 1024 * tokens_length * 4

YY1 = tf.reshape(Y1, shape=[-1, fully_connected_size])

W2 = tf.Variable(tf.truncated_normal([fully_connected_size, 3], stddev=0.1))
B2 = tf.Variable(tf.zeros([3]))
Ylogits = tf.matmul(YY1, W2) + B2
Y = tf.nn.softmax(Ylogits)

cost_fn = tf.nn.softmax_cross_entropy_with_logits(logits=Ylogits, labels=y_)
cost_fn = tf.reduce_mean(cost_fn) * 100

# accuracy of the trained model, between 0 (worst) and 1 (best)
correct_prediction = tf.equal(tf.argmax(Y, 1), tf.argmax(y_, 1))
accuracy_fn = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))

# training step, the learning rate is a placeholder
train_step = tf.train.AdamOptimizer(lr).minimize(cost_fn)

# init
init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)

epoch_count = 10
step_count = 100

print(datetime.datetime.now().time())

for epoch in range(epoch_count):
    for step in range(step_count):
        total_step = epoch * step_count + step

        # training on batches of 100 items
        batch_x, batch_y = next_batch(100, X_train, y_train)

        # learning rate decay
        max_learning_rate = 0.001
        min_learning_rate = 0.00003
        decay_speed = 2000.0
        learning_rate = min_learning_rate + (max_learning_rate - min_learning_rate) * math.exp(
            -total_step / decay_speed)
        # learning_rate = 0.005

        # the backpropagation training step
        sess.run(train_step, {x: batch_x, y_: batch_y, lr: learning_rate})

    accuracy, = sess.run([accuracy_fn], {x: X_test, y_: y_test})
    print(datetime.datetime.now().time())
    print("********* epoch " + str(epoch) + " ********* accuracy: " + str(accuracy))
