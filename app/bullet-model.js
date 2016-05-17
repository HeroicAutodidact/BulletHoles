Bullet = function(content,children){
	// this.parent = null;
	this.parent = null;
	this.content = content;
	this.children = children;
	for(c in this.children){
		child = this.children[c];
		child.parent = this;
	}
}

Bullet.prototype.reparent = function(newParent,index){
	//Remove from previous parent
	this.parent.children = _.without(this.parent.children, this)

	//Redirect internal reference to new parent
	this.parent = newParent;

	//Add to new parents children list
	newParent.children.splice(index,0,this);
}

Bullet.prototype.getAncestry = function(node){
	//Recursion might make more intuitive sense
	node = this;
	ancestry = [];
	while(node.parent != null){
		node = node.parent;
		ancestry.unshift(node);
	}
	return ancestry;
}