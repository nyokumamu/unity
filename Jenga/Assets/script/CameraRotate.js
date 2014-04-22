#pragma strict

static var _rotate : float = 0;
static var _speed  : float = 5;

function Update () {
	// 回転
	var vec3 : Vector3 = Vector3(0, _rotate*_speed, 0);
	transform.RotateAround(vec3.zero, vec3.up, -vec3.y);
}

static function addRotate (rotate : float){
	_rotate = rotate;	
}

/*
function _updateHeight() {
	if (_height == 0) return;
	var pos : Vector3 = transform.position;
	transform.Translate(0,_height,0);
	_height = 0;
}
*/
static function resetRotate () {
	_rotate = 0;
}
