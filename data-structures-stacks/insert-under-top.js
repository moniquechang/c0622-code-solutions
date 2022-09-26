/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const poppedValue = stack.pop();
    stack.push(value);
    stack.push(poppedValue);
  }
}
