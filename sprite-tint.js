console.clear();

const app = new PIXI.Application(800, 600, {
	backgroundColor: 0x9cbac9, autoResize: true, forceCanvas: true
});

document.getElementById("app").appendChild(app.view);

const bgTexture = PIXI.Texture.fromImage("https://s3-us-west-2.amazonaws.com/s.cdpn.io/33073/landscape.jpg");

const bg = new PIXI.Sprite(bgTexture);

app.stage.addChild(bg);

const applyTint = e => {
	const tint = e.target.getAttribute("id");
	let targetTint;
	switch (tint) {
		case "red":
			targetTint = 0xff3333;
			break;
		case "green":
			targetTint = 0x009933;
			break;
		case "purple":
			targetTint = 0xcc00ff;
			break;
		case "grey":
			targetTint = 0x8c8c8c;
			break;
		case "none":
			targetTint = 0xffffff;
			break;
	}
	bg.tint = targetTint;
};

// buttons
const red = document.getElementById("red");
const green = document.getElementById("green");
const purple = document.getElementById("purple");
const grey = document.getElementById("grey");
const noTint = document.getElementById("none");

red.onclick = applyTint;
green.onclick = applyTint;
purple.onclick = applyTint;
grey.onclick = applyTint;
noTint.onclick = applyTint;
