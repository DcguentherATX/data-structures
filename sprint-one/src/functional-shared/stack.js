var Stack = function() {
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    var top = this.storage[this.count];
    if (top !== undefined) {
      delete this.storage[this.count];
      this.count--;
      return top;
    }  
  },
  size: function() {
    return this.count;
  }
};