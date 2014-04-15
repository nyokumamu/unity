﻿#pragma strict

static var _rotate : float = 0;
function Update () {
	var vec3 : Vector3 = Vector3(0, _rotate*2, 0);
	transform.RotateAround(vec3.zero, vec3.up, -vec3.y);
}

static function addRotate (rotate : float){
	_rotate = rotate;	
}
static function resetRotate () {
	_rotate = 0;
}
