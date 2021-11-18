class LinkedNode {
  public val: number;
  public next: LinkedNode;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  public size: number;
  public head: LinkedNode;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return;
    }
    const node = new LinkedNode(val);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      if (!curr) {
        this.head = node;
      } else {
        for (let i = 0; i < index - 1; i++) {
          // prev node
          curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
      }
    }
    this.size += 1;
  }

  deleteAtIndex(index: number): void {
    // size: 3 [0,1,2] => index: < 3
    if (index < 0 || index >= this.size) {
      return;
    }

    let curr = this.head;
    if (index === 0) {
      this.head = curr.next;
    } else {
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size -= 1;
  }
}
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList();
obj.addAtHead(2);
obj.addAtIndex(1, 4);
obj.addAtTail(5);
obj.addAtHead(2);
obj.addAtIndex(4, 3);
obj.addAtTail(5);
obj.addAtTail(5);
obj.addAtIndex(6, 8);
console.log(obj.get(0));
console.log(obj.get(1));
console.log(obj.get(2));
console.log(obj.get(3));
console.log(obj.get(4));
// console.log(obj.get(6));
console.log({ obj });
