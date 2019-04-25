const htmlTester = /^<.*>$/g;

class Doper {
	constructor(dom, parent) {
		this.dom = dom;
		this.parent = parent;
		this.x = 0;
		this.y = 0;
		this.scale = 1;
		this.rotation = 0;
		this.active = true;
		if (this._parent) {
			this._parent.appendChild(this.dom);
		}
	}

	destroy() {
		this.dom.remove();
		this.active = false;
	}

	_update() {
		if(!this.active) return;
		let transform = `translate3D(${this.x}px, ${this.y}px, 0px) scale(${this.scaleX}, ${this.scaleY}) rotate(${this.rotation}deg)`;
		Object.assign(this.dom.style, { transform });
	}

	get style() {
		return this.dom.style;
	}

	get rotation() {
		return this._rotation;
	}

	set rotation(value) {
		this._rotation = value;
		this._update();
	}

	get scale() {
		return this._scale;
	}

	set scale(value) {
		this._scale = value;
		this.scaleX = value;
		this.scaleY = value;
		this._update();
	}

	get scaleY() {
		return this._scaleY;
	}

	set scaleY(value) {
		this._scaleY = value;
		this._update();
	}

	get scaleX() {
		return this._scaleX;
	}

	set scaleX(value) {
		this._scaleX = value;
		this._update();
	}

	get y() {
		return this._y;
	}

	set y(value) {
		this._y = value;
		this._update();
	}

	get x() {
		return this._x;
	}

	set x(value) {
		this._x = value;
		this._update();
	}

	get parent() {
		return this._parent;
	}

	set parent(value) {
		let _parent = getDom(value);
		if (!_parent) {
			console.warn('Illegal parent, abort!');
			return;
		}

		if (this.parent) {
			this.parent.removeChild(this.dom);
		}

		this._parent = value;
		this._parent.appendChild(this.dom);
	}

	get dom() {
		return this._dom;
	}

	set dom(value) {
		this._dom = value;
	}

	get html() {
		return this.dom.innerHTML;
	}

	set html(value) {
		this.dom.innerHTML = value;
	}
}

function getDom(dom) {
	let _dom;
	if (dom instanceof HTMLElement) {
		_dom = dom;
	} else if (typeof dom === 'string') {
		if (htmlTester.test(dom)) {
			let div = document.createElement('div');
			div.innerHTML = dom.trim();
			_dom = div.firstChild;
		} else {
			_dom = document.querySelector(dom);
			if (!_dom) {
				console.warn(`Could not find element "${dom}"! Abort!`);
				return;
			}
		}
	}
	return _dom;
}

const doper = function (dom, parent) {
	if (!dom) return;
	let _dom = getDom(dom);
	let _parent = getDom(parent);
	return new Doper(_dom, _parent);
}

if (typeof module === 'object') {
	module.export = doper;
}