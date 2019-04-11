var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count ++;
};

Queue.prototype.dequeue = function() {
  if (this.storage[this.first] !== undefined) {
    var returnMe = this.storage[this.first];
    delete this.storage[this.first];
    this.first ++;
    return returnMe;
  }
};

Queue.prototype.size = function() {
  return this.count - this.first;
};