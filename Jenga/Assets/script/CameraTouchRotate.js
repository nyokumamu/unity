var rotatetarget:Transform;
var xspeed:float = 2;
var yspeed:float = 0.1;
var targetObj:Transform;
var distance = 13.0;
var dy = 1.0;
 
private var x = 0.0;
private var y = 0.0;
 
var yMinLimit = 2;
var yMaxLimit = 1000;
 
function Start () {
    var angles = rotatetarget.eulerAngles;
    x = angles.y;
    y = angles.x;

	var rotation = Quaternion.Euler(0, x, 0);
    var position = rotation * Vector3(0.0, dy, -distance) + targetObj.position;

    rotatetarget.rotation = rotation;
    rotatetarget.position = position;
	rotatetarget.position.y = y;

 
    // Make the rigid body not change rotation
    if (rigidbody)
        rigidbody.freezeRotation = true;
}
function OnMouseDrag() {
	Debug.Log("OnDrag");
}
 
function Update() {
 
    //Drag
    //if(Input.GetMouseButton(0)) {
	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
 
		var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
        x += touchDeltaPosition.x * xspeed * 0.1;
        y -= touchDeltaPosition.y * yspeed * 0.1;
 
        y = ClampAngle(y , yMinLimit, yMaxLimit);
 
        var rotation = Quaternion.Euler(0, x, 0);
        var position = rotation * Vector3(0.0, dy, -distance) + targetObj.position;
 
        rotatetarget.rotation = rotation;
        rotatetarget.position = position;
		rotatetarget.position.y = y;
    }
 
//    rotatetarget.position = Quaternion.Euler(0, x, 0) * Vector3(0.0, dy, -distance) + targetObj.position;
 
}
 
static function ClampAngle (angle : float, min : float, max : float) {
    return Mathf.Clamp (angle, min, max);
}
