#pragma strict

static var _height : float = 0;

function Update () {
	_updateHeight();
}

static function addHeight (height: float){
	_height = height;	
}

function _updateHeight() {
	if (_height == 0) return;
	var pos : Vector3 = transform.position;
	transform.Translate(0,_height,0);
}

static function resetHeight() {
	_height = 0;
}

