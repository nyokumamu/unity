using UnityEngine;
using System.Collections;

public class FBButtonCS : MonoBehaviour {
	// 
	private bool isInit = false;


	// Use this for initialization
	void Start () {
		// 初期化
		FB.Init(OnInitComplete, OnHideUnity);
	}
	
	// Update is called once per frame
	void Update () {
	}

	// タッチした時の処理
	void OnMouseUp(){
		FB.Login("email,publish_actions", LoginCallback);
	}


	private void OnInitComplete() {
        isInit = true;
	}
	private void OnHideUnity(bool isGameShown) {
		Debug.Log("Is game showing? " + isGameShown);
	}
	void LoginCallback(FBResult result)
    {
		string lastResponse = "";
        if (result.Error != null)
            lastResponse = "Error Response:\n" + result.Error;
        else if (!FB.IsLoggedIn)
        {
            lastResponse = "Login cancelled by Player";
        }
        else
        {
            lastResponse = "Login was successful!";
        }
		Debug.Log(lastResponse);
    }

}
