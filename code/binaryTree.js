var Node = function(data){
	this.data = data;
	this.leftChild = null;
	this.rightChild = null;
}

var BinaryTree = function(){
	this.bTree = {}
	this.bTree.root = null;
}

BinaryTree.prototype.toString = function() {
	return this.bTree;
}

BinaryTree.prototype.insert = function(data) {
	var newNode = new Node(data);
	var currentNode;
	var parentNode;

	// console.log(newNode);
	// console.log(root);

	if(this.bTree.root === null){
		this.bTree.root = newNode;
		console.log(this.bTree.root);
	} else {
		var isInserted = false;
		currentNode = this.bTree.root;
    parentNode = null;

		while(!isInserted){
			parentNode = currentNode;
			if (data < parentNode.data) {
				currentNode = currentNode.leftChild;
				if(currentNode === null) {
					parentNode.leftChild = newNode;
					isInserted = true;
				}
			} else {
				currentNode = currentNode.rightChild;
				if (currentNode === null) {
					parentNode.rightChild = newNode;
					isInserted = true;
				}
			}
		}
	}
}

var a = new BinaryTree();
//console.log(a.toString());
a.insert(4);
a.insert(10);
a.insert(8);
a.insert(12);
a.insert(6);
a.insert(11);

console.log(JSON.stringify(a.toString()));
