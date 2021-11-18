var LinkedNode = /** @class */ (function () {
    function LinkedNode(val) {
        this.val = val;
        this.next = null;
    }
    return LinkedNode;
}());
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
        this.head = null;
        this.size = 0;
    }
    MyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.size) {
            return -1;
        }
        if (!this.head) {
            return -1;
        }
        var curr = this.head;
        for (var i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    };
    MyLinkedList.prototype.addAtHead = function (val) {
        this.addAtIndex(0, val);
    };
    MyLinkedList.prototype.addAtTail = function (val) {
        this.addAtIndex(this.size, val);
    };
    MyLinkedList.prototype.addAtIndex = function (index, val) {
        if (index < 0 || index > this.size) {
            return;
        }
        var node = new LinkedNode(val);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            var curr = this.head;
            if (!curr) {
                this.head = node;
            }
            else {
                for (var i = 0; i < index - 1; i++) {
                    // prev node
                    curr = curr.next;
                }
                node.next = curr.next;
                curr.next = node;
            }
        }
        this.size += 1;
    };
    MyLinkedList.prototype.deleteAtIndex = function (index) {
        // size: 3 [0,1,2] => index: < 3
        if (index < 0 || index >= this.size) {
            return;
        }
        var curr = this.head;
        if (index === 0) {
            this.head = curr.next;
        }
        else {
            for (var i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.size -= 1;
    };
    return MyLinkedList;
}());
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
console.log({ obj: obj });
