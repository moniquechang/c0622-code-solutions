/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxNum = stack.peek();
  while (stack.peek() !== undefined) {
    const poppedNum = stack.pop();
    if (poppedNum > maxNum) {
      maxNum = poppedNum;
    }
  }
  return maxNum;
}
