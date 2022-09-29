/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  let count = 0;
  while (count <= index) {
    const dequeuedValue = queue.dequeue();
    if (count === index) {
      return dequeuedValue;
    } else {
      queue.enqueue(dequeuedValue);
      count++;
    }
  }
}
