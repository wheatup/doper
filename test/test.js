window.onload = function () {
	let node = doper(
		'<div>Hello World!</div>',
		'.container',
		{
			x: 0,
			y: 0,
			width: 100,
			pivotX: 0.5,
			pivotY: 0.5,
			left: 120,
			right: 200,
			top: 20,
			bottom: 20,
			minAnchorX: 0,
			maxAnchorX: 1,
			minAnchorY: 0,
			maxAnchorY: 1,
			pivotX: 0.5,
			pivotY: 0.5,
			rotation: 50
		}, {
			backgroundColor: 'salmon',
		});

	Object.assign(node.parent.style, {
		position: 'relative'
	});

	function update(){
		node.rotation++;
		node.right-= 1;
		requestAnimationFrame(update);
	}

	update();
};