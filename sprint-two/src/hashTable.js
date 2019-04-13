

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  var newBucket = [];

  //possible problem w/ bucket[0] === k for larger use
  if (bucket === undefined || bucket[0] === k) {
    newBucket.push(tuple);
    this._storage.set(index, newBucket);    
  }
  else {
    newBucket.push(tuple);
    for (let i = 0; i < bucket.length; i ++) {
      newBucket.push(bucket[i]);
    }
    this._storage.set(index, newBucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.length === 1) {
    return bucket[0][1];
  }
  else if (bucket.length > 1) {
    for (let i = 0; i < bucket.length; i ++){
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  var checkKeys = function(element, i, storage){
    for (let i = 0; i < bucket.length; i ++) {
      if(bucket[i][0] === k) {      
       delete bucket[i][1];
      }
    }
    return;
  };

  this._storage.each(checkKeys);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Quadratic
 */


