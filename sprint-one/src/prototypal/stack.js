var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};
  
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {  
  this.count ++;
  this.storage[this.count] = value;

};

stackMethods.pop = function() {
  var top = this.storage[this.count];
  if (this.count > 0) {
    delete this.storage[this.count];
    this.count --;
    return top;
  }
};

stackMethods.size = function() {
  return this.count;
};