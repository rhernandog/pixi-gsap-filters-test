console.clear();
const app = new PIXI.Application(800, 600, {
	backgroundColor: 0x9cbac9, autoResize: true, forceCanvas: false
});
// var renderer = PIXI.autoDetectRenderer(800, 600);
document.getElementById("app").appendChild(app.view);

// create the root of the scene graph
var stage = new PIXI.Container();

var bg = PIXI.Sprite.fromImage("https://s3-us-west-2.amazonaws.com/s.cdpn.io/33073/landscape.jpg");
bg.scale.set(1, 1);
stage.addChild(bg);
app.stage.addChild(stage);

/** CUSTOM FILTER CODE **/
// uniforms code
//Create a uniforms object to send to the shader
var uniforms = {};
uniforms.customUniform = {
	type: "f",
	value: 0.1
};

//Get shader code as a string
var shaderCode = document.getElementById("shader").innerHTML
//Create our Pixi filter using our custom shader code
var simpleShader = new PIXI.Filter('', shaderCode, uniforms);
//Apply it to our object
bg.filters = [simpleShader];
