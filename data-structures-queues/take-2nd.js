/* exported take2nd */

function take2nd(queue) {
  this.postpone(queue);
  const secondValue = queue.dequeue();
  return secondValue;
}
