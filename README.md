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
* top
* bottom
* left
* right
* minAnchor
* maxAnchor
* parent
* html
* css

and many more...

All the attributes are behave separately, and auto refreshs the dom correspondingly while you assigning them. Much like a UGUI way to control your dom elements. Works perfectly with other animation libraries (e.g. tween)

### Examples

```javascript
let node = doper('<div>Hello World!</div>', '.container');

node.parent.style.position = 'relative';
node.style.backgroundColor = '#789';

// 居中
node.minAnchorX = 0.5;
node.maxAnchorX = 0.5;
node.minAnchorY = 0.5;
node.maxAnchorY = 0.5;

function update() {
	node.rotation++;
	node.y = Math.sin(node.rotation * 0.05) * 100;
	requestAnimationFrame(update);
}

update();
```

#### Result:
[https://i.imgur.com/JxPoBs1.gif](https://i.imgur.com/JxPoBs1.gif)