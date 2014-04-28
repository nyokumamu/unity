#pragma strict

/* Example level loader */


// JavaScript
function OnGUI () {
	var height : int = Screen.height/300;
	var width : int = Screen.width/270;
	// Make a background box
	GUI.Box (Rect (10*width,10*height,100*width,90*height), "Loader Menu");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (20*width,40*height,80*width,20*height), "Top")) {
		Application.LoadLevel ("Top");
	}

	// Make the second button.
	if (GUI.Button (Rect (20*width,70*height,80*width,20*height), "FB")) {
		Application.LoadLevel ("FB");
	}
}

