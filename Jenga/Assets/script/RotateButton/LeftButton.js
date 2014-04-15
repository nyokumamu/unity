#pragma strict

var dist : float = 1;
var speed : float = -0.5;

function OnMouseDrag() {
	var value : float = dist * speed;
	CameraRotate.addRotate(value);
}
function OnMouseUp() {
	Debug.Log("OnMouseUp");
	CameraRotate.resetRotate();
}
