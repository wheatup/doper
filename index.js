const htmlTester = /^<.*>$/g;

class Doper {
	constructor(dom, parent, params, css) {
		this.dom = dom;
		this.parent = parent;

		this._x = 0;
		this._y = 0;
		this._localX = 0;
		this._localY = 0;
		this._y = 0;
		this._width = 100;
		this._height = 100;
		this._scale = 1;
		this._scaleX = 1;
		this._scaleY = 1;
		this._pivotX = 0.5;
		this._pivotY = 0.5;
		this._minAnchorX = 0;
		this._maxAnchorX = 1;
		this._minAnchorY = 0;
		this._maxAnchorY = 1;
		this._rotation = 0;
		this.active = true;

		if (params) {
			Object.assign(this, params);
		}

		Object.assign(this._dom.style, { position: 'absolute' });

		if (css) {
			Object.assign(this._dom.style, css);
		}

		if (this._parent) {
			this._parent.appendChild(this.dom);
		}

		this._update();

		window.addEventListener('resize', this._update.bind(this));
	}

	destroy() {
		this.dom.remove();
		this.active = false;
	}

	_update() {
		if (!this.active) return;
		let transformOrigin = `${100 * this._pivotX}% ${100 * this._pivotY}%`;
		let transform = `scale(${this._scaleX * this._scale}, ${this._scaleY * this._scale}) rotate(${this._rotation}deg)`;

		if (!isNaN(this._left) && !isNaN(this._right)) {
			this.__left = this._parent.clientWidth * this._minAnchorX + this._left + this._x;
			this.__right = this._parent.clientWidth * (1 - this._maxAnchorX) + this._right - this._x;
		} else if (!isNaN(this._left) && isNaN(this._right)) {
			this.__left = this._parent.clientWidth * this._minAnchorX + this._left + this._x;
			this.__right = this._parent.clientWidth - (this.__left + this._width);
		} else if (isNaN(this._left) && !isNaN(this._right)) {
			this.__right = this._parent.clientWidth * (1 - this._maxAnchorX) + this._right - this._x;
			this.__left = this._parent.clientWidth - this.__right - this._width;
		} else {
			this.__left = this._minAnchorX * this._parent.clientWidth - this._width * this._pivotX + this._x;
			this.__right = this._parent.clientWidth * (1 - this._maxAnchorX) - this._width * (1 - this._pivotX) + this._x;
		}

		if (!isNaN(this._top) && !isNaN(this._bottom)) {
			this.__top = this._parent.clientHeight * this._minAnchorY + this._top + this._y;
			this.__bottom = this._parent.clientHeight * (1 - this._maxAnchorY) + this._bottom - this._y;
		} else if (!isNaN(this._top) && isNaN(this._bottom)) {
			this.__top = this._parent.clientHeight * this._minAnchorY + this._top + this._y;
			this.__bottom = this._parent.clientHeight - (this.__top + this._height);
		} else if (isNaN(this._top) && !isNaN(this._bottom)) {
			this.__bottom = this._parent.clientHeight * (1 - this._maxAnchorY) + this._bottom - this._y;
			this.__top = this._parent.clientHeight - this.__bottom - this._height;
		} else {
			this.__top = this._minAnchorY * this._parent.clientHeight - this._height * this._pivotY + this._y;
			this.__bottom = this._parent.clientHeight * (1 - this._maxAnchorY) - this._height * (1 - this._pivotY) + this._y;
		}

		let left = this.__left + 'px';
		let right = this.__right + 'px';
		let top = this.__top + 'px';
		let bottom = this.__bottom + 'px';
		Object.assign(this.dom.style, { transformOrigin, transform, left, right, top, bottom });
	}

	get top() {
		return this._top;
	}

	set top(value) {
		this._top = value;
		this._update();
	}

	get bottom() {
		return this._bottom;
	}

	set bottom(value) {
		this._bottom = value;
		this._update();
	}

	get left() {
		return this._left;
	}

	set left(value) {
		this._left = value;
		this._update();
	}

	get right() {
		return this._right;
	}

	set right(value) {
		this._right = value;
		this._update();
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

	get height() {
		return this._height;
	}

	set height(value) {
		this._height = value;
		this._update();
	}

	get width() {
		return this._width;
	}

	set width(value) {
		this._width = value;
		this._update();
	}

	get maxAnchorY() {
		return this._maxAnchorY;
	}

	set maxAnchorY(value) {
		this._maxAnchorY = value;
		this._update();
	}

	get minAnchorY() {
		return this._minAnchorY;
	}

	set minAnchorY(value) {
		this._minAnchorY = value;
		this._update();
	}

	get minAnchorX() {
		return this._minAnchorX;
	}

	set minAnchorX(value) {
		this._minAnchorX = value;
		this._update();
	}

	get maxAnchorX() {
		return this._maxAnchorX;
	}

	set maxAnchorX(value) {
		this._maxAnchorX = value;
		this._update();
	}

	get pivotX() {
		return this._pivotX;
	}

	set pivotX(value) {
		this._pivotX = value;
		this._update();
	}

	get pivotY() {
		return this._pivotY;
	}

	set pivotY(value) {
		this._pivotY = value;
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

	get localY() {
		return this._localY;
	}

	set localY(value) {
		this._localY = value;
		this._update();
	}

	get localX() {
		return this._localX;
	}

	set localX(value) {
		this._localX = value;
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

const doper = function (dom, parent, params, css) {
	if (!dom) return;
	let _dom = getDom(dom);
	let _parent = getDom(parent);
	if (_dom) {
		return new Doper(_dom, _parent, params, css);
	}
}

if (typeof module === 'object') {
	module.export = doper;
}