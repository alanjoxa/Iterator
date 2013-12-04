	var model = [];
	model[0] = [00,01,02,03];
	model[1] = [10,11,12,13];
	model[2] = [20,21,22,23];
	model[3] = [30,31,32,33];

	var Iterator = (function(arrayDD) {
		var model = arrayDD;

		function Node(topOffset, leftOffset, rootPath) {
			// body...
			rootPath = rootPath || [];
			
			this.reset = function() {
				// body...
				topOffset = 0;
				leftOffset = 0;
				rootPath = [];
				this.value = model[topOffset][leftOffset];
				if(!hasParent() && this.getParent) {
					delete this.getParent;
				}
				if(!hasDown() && this.getDown) {
					delete this.getDown;
				}
				if(!hasDownRight() && this.getDownRight) {
					delete this.getDownRight;
				}
				return this;
			}

			this.inValidate = function() {
				// body...
				model[topOffset][leftOffset] = null;
				for(var d in this) {
					if(this.hasOwnProperty(d) && d != "getParent") {
						delete this[d];
					}
				}
			}

			if(model[topOffset][leftOffset] != null) {
				this.value = model[topOffset][leftOffset];
			}

			if(hasParent()) {
				this.getParent = function() {
					// body...
					return (new Node(topOffset-1, leftOffset - getLast(rootPath), rootPath.slice(0, rootPath.length-1)));
				} 
			}
			if(hasDown()) {
				this.getDown = function() {
					// body...
					return (new Node(topOffset+1, leftOffset, rootPath.concat(0)));
				};
			}
			if(hasDownRight()) {
				this.getDownRight = function() {
					// body...
					return (new Node(topOffset+1, leftOffset+1, rootPath.concat(1)));
				};
			}

			function hasParent() {
				// body...
				return has(topOffset-1, leftOffset-getLast(rootPath));
			}

			function hasDown() {
				return has(topOffset+1, leftOffset);
			}

			function hasDownRight() {
				return has(topOffset+1, leftOffset+1);
			}

			function has(top,left) {
				// body...
				return !!(model[top] && (model[top][left] !== null));
			}

			function getLast(array) {
				return (array[array.length-1] || 0);
			}
		}
		
		return (new Node(0, 0));
	})(model);

//Algorithem implimentation in progress