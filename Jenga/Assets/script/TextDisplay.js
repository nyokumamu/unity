﻿#pragma strict

static var point : int = 0;
static var isGameOver : int = 0;
static var dispColor : String = "red";

function OnGUI(){
	// Point表示
	var pointDisplayStyle = new GUIStyle();
	pointDisplayStyle.fontSize = 40;
	GUI.Label(Rect(10,20,120,20), point + " point", pointDisplayStyle);

	// color panel 表示
	_addColorLabel();

	if (isGameOver) {
		var style = new GUIStyle();
		style.fontSize = 50;
		var rectWidth = 120;
		var rectHeight = 20;
		GUI.Label(Rect(Screen.width/2 - 150,Screen.height/2 - 50,120,20), "GAME OVER", style);
	}
}

var redTexture : Texture;
var blueTexture : Texture;
var yellowTexture : Texture;
function _addColorLabel (){
	GUI.DrawTexture(Rect(Screen.width*7/16,Screen.height/10,Screen.width/8,Screen.height/8), _colorTexture(), ScaleMode.ScaleToFit, true);
}
function _colorTexture (){
	if (dispColor == 'red') {
		return redTexture;
	} else if (dispColor == 'yellow'){
		return yellowTexture;
	} else {
		return blueTexture;
	}
}

static function addPoint(_addPoint : int) {
	if (!isGameOver) {
	point += _addPoint;
	}
}
static function resetPoint() {
	point = 0;
}

static function changeColor() {
	var randValue = Mathf.Ceil(Random.value * 100) % 3;
	if (randValue == 0) {
		dispColor = "blue";
	} else if (randValue == 1){
		dispColor = "yellow";
	} else {
		dispColor = "red";
	}
}

static function doGameOver(){
	yield WaitForSeconds(2.0f);
	Time.timeScale = 0;
	isGameOver = 1;
}

static function initialize() {
	resetPoint();
	Time.timeScale = 1;
	isGameOver = 0;
}
