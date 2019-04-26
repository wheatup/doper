window.onload = function () {
	let node = doper(
		'<div>Hello World!</div>',
		'.container', 
		{
			x: 0,
			y: 0,
			pivotX: 0.5,
			pivotY: 0.5,
			left: 80,
			right: 80,
			top: 80,
			bottom: 80,
			minAnchorX: 0.25,
			maxAnchorX: 0.75,
			minAnchorY: 0.25,
			maxAnchorY: 0.75,
			pivotX: 0.5,
			pivotY: 0.5,
			rotation: 50
		}, {
			backgroundColor: 'salmon',
		});
	
	node.parent.style.position = 'relative';
	
	function update() {
		node.rotation++;
		requestAnimationFrame(update);
	}
	
	update();
};