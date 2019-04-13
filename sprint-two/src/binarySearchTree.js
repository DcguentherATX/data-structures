var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);  
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  //create new tree;
  var newTree = BinarySearchTree(value);

  var binarySearch = function(tree) {
  //if tree value is less than root value move left
    if (newTree.value < tree.value) {
      if(tree.left === null) {
        tree.left = newTree; 
      } else {
        binarySearch(tree.left);
      }
    }
    if (newTree.value > tree.value) { 
      if(tree.right === null) {
        tree.right = newTree;
      } else if (tree.right !== null) {
        binarySearch(tree.right);
      }
    }    
  //if greater than move right
  //repeat process until find a left/right prop that is null  
  }
  binarySearch(this);

};

BinarySearchTree.prototype.contains = function(value) {
  
  var valueSearch = function(tree) {
  //if tree value is less than root value move left

    if(value === tree.value) {
      return true;    
    }
    else if (value < tree.value && tree.left !== null) {
      return valueSearch(tree.left);
    }
    else if (value > tree.value && tree.right !== null) { 
      return valueSearch(tree.right);
    }
    else {
      return false;
    }
  };    
  //if greater than move right
  //repeat process until find a left/right prop that is null  
  return valueSearch(this);
  
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  
  var iterate = function(tree) {
    cb(tree.value);

    if (tree.left !== null) {
      iterate(tree.left);
    }
    if (tree.right !== null) {
      iterate(tree.right);
    }
  }

  iterate(this);
};

BinarySearchTree.prototype.size = function() {
  var count = 0;

  var countTree = function(tree) {
    count ++;
  };
  this.depthFirstLog(countTree);
  return count;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
