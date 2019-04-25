window.onload = function () {
	let node = doper('<div>Hello World!</div>', '.container');
	Object.assign(node.parent.style, {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	});
	node.style.float = 'left';
	node.style.position = 'absolute';

	let tick = 0;
	function update(){
		tick++;
		node.x = Math.cos(tick * 0.05) * 200;
		node.y = Math.sin(tick * 0.05) * 200;
		node.scale = (1 + Math.cos(tick * 0.075) * 0.5) * 2;
		node.rotation = tick * 2;
		requestAnimationFrame(update);
	}
	update();
};