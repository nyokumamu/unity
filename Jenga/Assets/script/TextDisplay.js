﻿#pragma strict

static var point : int = 0;
static var isGameOver : int = 0;
static var dispColor : String = "red";

// 色指定を行うテクスチャ
var redTexture : Texture;
var blueTexture : Texture;
var yellowTexture : Texture;
// ボタン関連
var resetTexture : Texture;
var fbTexture : Texture;

// 連続で色通りバーを消した回数
static var consecutiveCount : int = 0;
// ブロックを倒す毎にもらえるポイント
static var basePoint : int = 1;

function OnGUI(){
	// 得点表示
	_addPointPanel();
	// color panel 表示
	_addColorLabel();
	// HighScore表示
	_addHighScoreLabel();

	if (isGameOver) {
		var style = new GUIStyle();
		style.fontSize = 50;
		var rectWidth = 120;
		var rectHeight = 20;
		GUI.Label(Rect(Screen.width/2 - 150,Screen.height/2 - 50,120,20), "GAME OVER", style);
	}
}

function _addPointPanel (){
	// Point表示
	var pointDisplayStyle = new GUIStyle();
	pointDisplayStyle.fontSize = 40;
	var dispText = point + " point";
	if (0 < consecutiveCount) {
		var tmpValue = consecutiveCount * basePoint;
		dispText = dispText + "(+" + tmpValue + ")";
	}
	GUI.Label(Rect(10,20,120,20), dispText, pointDisplayStyle);

}

function _addColorLabel (){
	GUI.DrawTexture(
			Rect(
				Screen.width*7/16,
				Screen.height/10,
				Screen.width/8,
				Screen.height/8
			),
			_colorTexture(),
			ScaleMode.ScaleToFit,
			true
	);
}
function _addHighScoreLabel (){
	var highScore : int = HighScore.getHighScore();
	var dispText : String = "(" + highScore + " point)";
	var style = new GUIStyle();
	style.fontSize = 20;
	GUI.Label(Rect(Screen.width*1/30,Screen.height*1/10 + 20,Screen.width/5,Screen.height/5), dispText, style);
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

static function addPoint(isClearQuest : boolean) {
	if (!isGameOver) {
		if (isClearQuest) { 
			consecutiveCount += 1;
		} else {
			consecutiveCount = 0;
		}
		point += basePoint * (1 + consecutiveCount);
	}

	if (HighScore.canUpdateHighScore(point)) {
		HighScore.updateHighScore(point);
	}
}
static function resetPoint() {
	point = 0;
	consecutiveCount = 0;
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
