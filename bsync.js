"use strict";

var bsync = require("browser-sync").create();

bsync.init({
	server: "./",
	index: "index.html",
	files: ["index.html", "sample.js", "canvas_tinter.js", "shader.js"]
});
