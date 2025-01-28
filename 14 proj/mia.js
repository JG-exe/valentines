"use strict";
/** @type {CanvasRenderingContext2D} */
let ctx;

setupCanvasContext();

export default ctx;

function setupCanvasContext() {
  //get a reference to the canvas element and configure it to fill the whole window
  let cvs = document.querySelector("cvs");
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
  ctx = cvs.getContext("2d");
}

window.onresize = reload;

function reload() {
  location.reload();
}
