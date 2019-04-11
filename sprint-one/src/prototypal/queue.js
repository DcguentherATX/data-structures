var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.first = 0;
  obj.storage = {};
  
  return obj;
};

var queueMethods = {
 
enqueue: function(value) {
  this.storage[this.count] = value;
  this.count ++;
},

dequeue: function() {
  if (this.storage[this.first] !== undefined) {
    var returnMe = this.storage[this.first];
    delete this.storage[this.first];
    this.first ++;
    return returnMe;
  }
},

size: function() {
  return this.count - this.first;
}

};