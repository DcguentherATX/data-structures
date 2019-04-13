var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }    
  };


  list.removeHead = function() {
    if (list.head !== null) {
      var oldHead = list.head.value;
      list.head = list.head.next;
      return oldHead;
    }
  };

  // list.contains = function(target) {
  //   if(list.head.value === target) {
  //     return true;
  //   } else if (list.head.value !== null) {
  //     var nextNode = list.head.next;
       
  //     var checkNodes = function(nextNode) {
  //       if(nextNode.next === null) {
  //         return false;
  //       }
  //       if(nextNode.value === target) {
  //         return true;
  //       }
  //       if(nodeNext.next !== null) {
  //         return checkNodes(nextNode.next);
  //       }
  //     }
  //     checkNodes(nextNode);
  //   } else {
  //     return false;
  //   }
  // };

  list.contains = function(target) {

    var checkNodes = function(node) {
      if (node.next === null && node.value !== target) {
        return false;
      }
      else if (node.value === target) {
        return true;
      }
      else if (node.next !== null) {
        return checkNodes(node.next);
      }
    };
    return checkNodes(this.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
   
/*
 * Complexity: What is the time complexity of the above functions?
 */
