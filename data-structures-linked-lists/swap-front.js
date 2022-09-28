/* exported swapFront */

function swapFront(list) {
  if (!list.next) return list;
  const firstVal = list.data;
  const secondVal = list.next.data;
  list.data = secondVal;
  list.next.data = firstVal;
  return list;
}
