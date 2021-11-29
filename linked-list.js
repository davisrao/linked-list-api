/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }
  
  /** _get(idx): retrieve node at idx. */

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count !== idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }
  
  /** push(val): add new value to end of list. */

  push(val) {
    //NOTES SOLUTION
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let firstNode = this.head;
    let newNode = new Node(val);
    
    if (this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else {
      newNode.next = firstNode;
      this.head = newNode;
      console.log({head:this.head, next: newNode.next})
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    let previous = null;

    if(this.length === 0){
      return
    }

    if(this.length === 1){
      this.head =null;
      this.tail=null;
      this.length =0;
      return current.val;
    }

    while (current !== null){
      if (current.next === null){
        this.length -= 1;
        this.tail = previous;
        return current.val;
      }
      previous = current
      current = current.next;
    }
    
  }

  /** shift(): return & remove first item. */

  shift() {
    let current =this.head;

    if(this.length === 0){
      return
    }

    if(this.length === 1){
      this.head =null;
      this.tail=null;
      this.length =0;
      return current.val;
    }

    let removed = this._get(0).val;
    this.head = this._get(1);
    this.length -= 1;
    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = this._get(idx);
    return node.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this._get(idx);
    node.val=val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length === 0){
      this.push(val);
      return;
    };

    if (idx >= this.length){
      this.push(val);
      this.length += 1;
      return;
    }

    if(idx === 0){
      this.unshift(val);
      this.length += 1;
      return;
    }
    let newNode = new Node(val);

    let before = this._get(idx-1);
    let after = this._get(idx);

    before.next = newNode;
    newNode.next= after;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (this.length === 0){
      return
    }

    if (this.length === 1 && idx !== 0){
      return
    }

    if(idx >= this.length){
      return
    }

    if(idx === this.length -1){
      this.pop();
      return;
    }

    let previous = this._get(idx -1);
    let next = this._get(idx + 1);
    previous.next = next;
    this.length -= 1;

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0){
      return 0
    }

    if (this.length === 1){
      return this._get(0).val;
    }

    let sum = 0;
    let current = this.head;

    while (current !== null){
        sum+= current.val;
        current = current.next
      }
    return sum / this.length;
  }
}

module.exports = LinkedList;
