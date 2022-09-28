/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newVal = new LinkedList(value);
  const restOfList = list.next;

  list.next = newVal;
  list.next.next = restOfList;
}
