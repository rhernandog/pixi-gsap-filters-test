(window => {
	console.clear();
	let _wSize;
	const _getDims = () => {
		_wSize = { h: document.documentElement.clientHeight, w: document.documentElement.clientWidth };
	};
	_getDims();

	const app = new PIXI.Application(_wSize.w, _wSize.h, {
		backgroundColor: 0x9cbac9, autoResize: true, forceCanvas: false
	});
	// append renderer
	document.getElementById("app").appendChild(app.view);

	// add and center a single container
	const _spritesContainer = new PIXI.Container();
	_spritesContainer.x = app.renderer.width / 2;
	_spritesContainer.y = app.renderer.height / 2;

	app.stage.addChild(_spritesContainer);

	// filter method
	const _createFilter = t => {
		const filter = new PIXI.filters.ColorMatrixFilter();
		t ? filter[t](true) : null;
		return filter;
	};

	// filters loop
	const filtersLine = new TimelineMax({ repeat: -1, repeatDelay: 3, paused: true });

	filtersLine
		.to(app.stage, 3, { pixi: { colorMatrixFilter: _createFilter("sepia") }, ease: Power1.easeInOut })
		.to(app.stage, 3, { pixi: { colorMatrixFilter: _createFilter("negative") }, ease: Power1.easeInOut })
		.to(app.stage, 3, { pixi: { colorMatrixFilter: _createFilter("kodachrome") }, ease: Power1.easeInOut })
		.to(app.stage, 3, { pixi: { colorMatrixFilter: _createFilter("browni") }, ease: Power1.easeInOut })
		.to(app.stage, 3, { pixi: { colorMatrixFilter: _createFilter("lsd") }, ease: Power1.easeInOut })
		.to(app.stage, 3, { pixi: { colorMatrixFilter: _createFilter() }, ease: Power1.easeInOut })
		.play();
	// 



	// set anchor method
	const _setAnchor = a => {
		a.forEach(e => {
			e.anchor.set(0.5);
		});
	};
	// loader callback
	const _spritesLoaded = (l, r) => {
		// create and add the sprites to the container
		const _bg = new PIXI.Sprite(r.background.texture);
		const _light1 = new PIXI.Sprite(r.light1.texture);
		const _light2 = new PIXI.Sprite(r.light2.texture);
		const _panda = new PIXI.Sprite(r.panda.texture);
		_panda.scale.y = 1.05;
		_setAnchor([_bg, _light1, _light2, _panda]);
		// add the sprites to the container
		_spritesContainer.addChild(_bg, _light1, _light2, _panda);
		// animate bg
		TweenMax.to(_bg, 15, { pixi: { rotation: -360 }, ease: Linear.easeNone, repeat: -1 });
		// light 1
		TweenMax.to(_light1, 5, { pixi: { rotation: 360 }, ease: Linear.easeNone, repeat: -1 });
		// light 2
		TweenMax.to(_light2, 10, { pixi: { rotation: 360 }, ease: Linear.easeNone, repeat: -1 });
		// shake that panda!!!
		const _pandaLine = new TimelineLite({ paused: true });
		_pandaLine
			.to(_panda, 0.3, { pixi: { scaleX: 1.05 }, ease: CustomEase.create("custom", "M0,0 C0,0 0.645,1 1,1") })
			.to(_panda, 0.6, { pixi: { scaleX: 0.95 }, ease: CustomEase.create("custom", "M0,0,C0.338,0,0.614,1,1,1"), repeat: -1, yoyo: true })
			.to(_panda, 0.6, { pixi: { scaleY: 0.95 }, ease: CustomEase.create("custom", "M0,0,C0.338,0,0.614,1,1,1"), repeat: -1, yoyo: true }, 0)
			/*.to(_panda, 0.25, { pixi: { scaleX: 1.05 }, ease: Power1.easeOut })
			.to(_panda, 0.5, { pixi: { scaleX: 0.95 }, ease: Power1.easeInOut, repeat: -1, yoyo: true })
			.to(_panda, 0.5, { pixi: { scaleY: 0.95 }, ease: Power1.easeInOut, repeat: -1, yoyo: true }, 0)*/
			.play();
	};

	// load all the sprites
	PIXI.loader
		.add("background", "img/SceneRotate.jpg")
		.add("panda", "img/panda.png")
		.add("light1", "img/LightRotate1.png")
		.add("light2", "img/LightRotate2.png")
		.load(_spritesLoaded);

	// window resize, responsive renderer
	window.onresize = () => {
		_getDims();
		app.renderer.resize(_wSize.w, _wSize.h);
		_spritesContainer.x = app.renderer.width / 2;
		_spritesContainer.y = app.renderer.height / 2;
	};

})(window);
