

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, tuple);
  }
  else {
    var oldTuple = this._storage.get(index);
    var newTuple = tuple;
    var input = [newTuple, oldTuple];
    console.log(input);
    this._storage.set(index, input);
    console.log(this._storage);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var target = this._storage.get(index);
  
  var checkKeys = function(element, i, storage){
    if(target[0] === k) {      
      delete target[1];
    }
  };

  this._storage.each(checkKeys);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


