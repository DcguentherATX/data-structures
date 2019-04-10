var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.enqueue = function(value) {   
    storage[count] = value;
    count = count + 1; 
  };

  someInstance.dequeue = function() {
    var numArr = [];
    var keys = Object.keys(storage);

    for (var i = 0; i < keys.length; i++) {
        numArr.push(Number(keys[i]));
    }
    var front = Math.min(...numArr);
    var returnValue = storage[front];
    delete storage[front];
    return returnValue;
  
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};

var q1 = Queue()
q1.enqueue('a');