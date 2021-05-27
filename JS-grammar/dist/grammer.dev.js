"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var elem = document.getElementById("test");

if (!elem) {// alert("testというIDが存在しません");
}

var elem1 = document.getElementById("hoge1");
var elem2 = document.getElementById("hoge2");
var elem3 = document.getElementById("hoge3");

if (!elem1 || !elem2) {
  elem3.style.color = "blue";
}

var a = 3;
var b = -2;
console.log(!!(a > 0 && b < 0));
var c = 100;

if (c > 100) {
  console.log("cは100より大きくないよ");
} // document.write("<p>hello world</p>");
// document.write("<h1>Gitコマンド難しい</h1>");


console.log(_typeof(true));
console.log(_typeof(43));
console.log(_typeof("JavaScript"));
console.log(_typeof(null));
console.log(_typeof(["配列"]));
console.log(_typeof({
  "key": "value"
}));
var div = document.getElementById('test');
test.animate({
  color: ['#409EFF', '#FF409E']
}, {
  duration: 1500,
  iterations: Infinity
});
var parent = document.getElementById("parent");
var idx = 7;

function addChildCreate() {
  var child = document.createElement("div");
  addChild(child);
}

function addChildCopy() {
  var child = document.getElementById("parent").firstElementChild.cloneNode(true);
  addChild(child);
}

function addChild(child) {
  child.id = "child" + idx;
  child.innerText = "子要素" + idx;
  idx--;
  child = parent.appendChild(child);
  console.log(child);
}