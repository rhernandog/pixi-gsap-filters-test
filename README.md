## PIXI Canvas Filters Test

## Description
Simple example of trying to use filters in a PIXI canvas renderer.

## Installing
Download/clone the repo. Then run

```$ npm install```

After installing all the dependencies, start the scripts:

````$ npm start```

This should open the default browser.

## Instructions
The files `sample.js` and `shader.js` have the following constructor:

```js
const app = new PIXI.Application(_wSize.w, _wSize.h, {
  backgroundColor: 0x9cbac9, autoResize: true, forceCanvas: false
});
```

Which shows the filters. Setting `forceCanvas: true`, sets the app to use the canvas renderer. After saving the file the browser should reload.

Also the `index.html` file has the following:

```html
<script src="sample.js"></script>
<!-- <script src="shader.js"></script> -->
<!-- <script src="canvas_tinter.js"></script> -->
```

By commenting out you can test other files as well.
