#pragma strict

static var point : int = 0;
static var isGameOver: int = 0;

function OnGUI(){
  GUI.Label(Rect(10,20,120,20), point + " point");
}

static function addPoint(_addPoint : int) {
	point += _addPoint;
}
static function resetPoint() {
	point = 0;
}
static function doGameOver(){
	isGameOver = 1;
}
