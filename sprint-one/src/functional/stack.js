var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 1;
  someInstance.push = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);

    for (let i = 0; i < keys.length; i++) {
      keys[i] = Number(keys[i]);
    }

    var top = Math.max(...keys);
    var returnVal = storage[top];
    delete storage[top];
    return returnVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
