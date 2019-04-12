

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //add nodes as objects;
  //nodes live inside Graph.nodes
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var keys = Object.keys(this.nodes);
  var stringed = JSON.stringify(node);
  return keys.includes(stringed);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
   //loop through node.edges array
   //for each element, remove node from element.edges array
    var nodeEdges = this.nodes[node].edges;
    
    for(var i = 0; i < nodeEdges.length; i++) {
      var edge = nodeEdges[i];
      var index = this.nodes[edge].edges.indexOf(node);
      
      this.nodes[edge].edges.splice(index, 1);
    }
    delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].edges.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    this.nodes[fromNode].edges.push(toNode);
    this.nodes[toNode].edges.push(fromNode);
  } 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeIndex = this.nodes[fromNode].edges.indexOf(toNode);
  var fromNodeIndex = this.nodes[toNode].edges.indexOf(fromNode);
  if(toNodeIndex !== -1) {
    this.nodes[fromNode].edges.splice(toNodeIndex, 1);
  }
  if(fromNodeIndex !== -1){
    this.nodes[toNode].edges.splice(fromNodeIndex, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //loop through this.nodes
    //perform cb fxn on each object
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


