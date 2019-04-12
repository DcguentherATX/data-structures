var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];
  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {

  
  var checkChildren = function(tree, target) {
    for (var i = 0; i < tree.children.length; i++) {
      var child = tree.children[i];      
      if (child === target) {
        return true;
      }
      else if (child.children.length === 0) {
        return false;    
      }
      else if (child.children.length > 0) {
        return checkChildren(child, target);
      }
    }
  }
  if (this.value === target) {
    return true;
  } else {
    return checkChildren(this, target);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
