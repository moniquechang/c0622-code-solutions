/* exported removeTail */

function removeTail(list) {
  if (list.next) {
    while (list.next.next !== null) {
      list = list.next;
    }
    list.next = list.next.next;
  }
}
