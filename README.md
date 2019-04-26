# <label style="color: #933">Do</label><label style="color: #; font-size: 20px">m Wrap</label><label style="color: #933">per</label>

### What is this tool for ?

With this tool, you can manipulate the position/rotation/scale of dom element with a much easy way. Including:

* x
* y
* width
* height
* scale
* scaleX
* scaleY
* rotation
* pivot
* minAnchor
* maxAnchor
* parent
* html
* css

and many more...

All the attributes are behave separately, and auto refreshs the dom correspondingly while you assigning them. Much like a UGUI way to control your dom elements. Works perfectly with other animation libraries (e.g. tween)

### Examples

```javascript
let node = doper(
	'<div>Hello World!</div>',
	'.container', 
	{
		left: 80,
		right: 80,
		top: 80,
		bottom: 80,
		minAnchorX: 0.25,
		maxAnchorX: 0.75,
		minAnchorY: 0.25,
		maxAnchorY: 0.75
	}, {
		backgroundColor: 'salmon',
	});

node.parent.style.position = 'relative';

function update() {
	node.rotation++;
	node.x = Math.sin(node.rotation*0.05) * 200;
	requestAnimationFrame(update);
}

update();
```