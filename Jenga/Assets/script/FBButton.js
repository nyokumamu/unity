//#pragma strict

private var isInit : boolean = false;
function OnMouseUp() {
	/*
	Application.LoadLevel("Top");
	TextDisplay.initialize();
	CubeBlockSpawn.resetPoint();
	*/

	//var fb = GetComponent("FB");
	//print(fb.Init(_OnInitComplete, _OnHideUnity));
}

private function _OnInitComplete() {
	Debug.Log("FB.Init completed: Is user logged in? " + FB.IsLoggedIn);
    isInit = true;
}

private function _OnHideUnity(isGameShown : boolean) {
	Debug.Log("Is game showing? " + isGameShown);
}

