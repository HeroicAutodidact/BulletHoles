Bullet = function(content,children){
	this.content = content;
	this.children = children;
	for(child in this.children){
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