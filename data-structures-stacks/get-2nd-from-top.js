/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  const poppedValue = stack.pop();
  const result = stack.peek();
  if (result === undefined) {
    stack.push(poppedValue);
    return;
  }
  stack.push(poppedValue);
  return result;
}
