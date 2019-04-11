var Queue = function() {
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  obj.first = 0;
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    var front = this.storage[this.first];
    if (front !== undefined) {
      delete this.storage[this.first];
      this.first++;
      return front;
    }  
  },
  size: function() {
    return this.count - this.first;
  }
};


