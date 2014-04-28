#pragma strict

function OnMouseUp() {
	Application.LoadLevel("Top");
	TextDisplay.initialize();
	CubeBlockSpawn.resetPoint();
}

