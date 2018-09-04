console.clear();

const app = new PIXI.Application(800, 600, {
	backgroundColor: 0x9cbac9, autoResize: true, forceCanvas: true
});

console.log( app.renderer.context );

document.getElementById("app").appendChild(app.view);

const bgTexture = PIXI.Texture.fromImage("https://s3-us-west-2.amazonaws.com/s.cdpn.io/33073/landscape.jpg");

PIXI.CanvasTinter.tintWithOverlay(bgTexture, "rgba(179, 179, 179, 0.5)", app.renderer.context.canvas);

const bg = new PIXI.Sprite(bgTexture);

app.stage.addChild(bg);
