var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  if (this.contains(item)){
    var index = this._storage.indexOf(item);
    this._storage.splice(index, 1);
  }
};

setPrototype.size = function() {
  return this._storage.length;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
