/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    const firstValue = queue.dequeue();
    if (queue.peek() === undefined) return firstValue;
    let secondValue = queue.peek();
    if (secondValue >= firstValue) {
      return firstValue;
    } else {
      queue.enqueue(firstValue);
      secondValue = null;
    }
  }
}
