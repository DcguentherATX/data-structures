class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  };

  pop() {
    var top = this.storage[this.count];
    if (this.count > 0) {
      delete this.storage[this.count];
      this.count--;
      return top;
      };
  };

  size() {
    return this.count;
  };

};