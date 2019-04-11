var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  var top = this.storage[this.count];
  if (this.count > 0) {
    delete this.storage[this.count];
    this.count--;
    return top;
  }
};

Stack.prototype.size = function() {
  return this.count;
};

// var Stanley = new Stack();