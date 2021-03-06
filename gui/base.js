const EventEmitter = require("events");

class Element extends EventEmitter {
	build(parent) {
		parent.addChildView(this.main);
	}

	clear() {
		for(let i = 0; i < this.main.childCount(); i++) {
			this.main.removeChildView(this.main.childAt(0));
		}
	}
}

class List extends Element {
	constructor() {
		super();
	}
	
	build(parent) {
		parent.addChildView(this.scroll);
	}

	clear() {
		for(let i = 0; i < this.main.childCount(); i++) {
			this.main.removeChildView(this.main.childAt(0));
		}
	}
}

module.exports = Element;
