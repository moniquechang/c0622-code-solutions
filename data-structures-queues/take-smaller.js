/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const firstValue = queue.dequeue();
    const secondValue = queue.dequeue();
    if ((firstValue > secondValue && secondValue !== undefined) || firstValue === secondValue) {
      queue.enqueue(firstValue);
      return secondValue;
    } else if (firstValue < secondValue && secondValue !== undefined) {
      queue.enqueue(secondValue);
      return firstValue;
    } else {
      return firstValue;
    }
  }
}
