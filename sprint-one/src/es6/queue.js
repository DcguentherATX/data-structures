class Queue {

  constructor() {
    this.storage = {};
    this.count = 0;
    this.first = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count ++;
    
  };

  dequeue(){
    var front = this.storage[this.first];
    if (front !== undefined) {
      delete this.storage[this.first];
      this.first ++;
      return front;
    }
  };

  size() {
    return this.count - this.first;
  }
}
