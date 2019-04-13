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

    if (tree.value === target) {
      return true;
    }
    else {
      for (let i = 0; i < tree.children.length; i ++) {
        var subtreeResult = checkChildren(tree.children[i], target);
        if (subtreeResult === true) {return true;}
      }
      return false; 
    }
  };
  return checkChildren(this, target);
};

treeMethods.countChildren = function() {
  var count = 0;

  var numberOfKids = function(tree) {
    if(tree.children.length > 0) {
      for(var i = 0; i < tree.children.length; i++) {
        count ++;
        numberOfKids(tree.children[i]);
      }
    }
  };

  numberOfKids(this);
  console.log(this);
  return count;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
