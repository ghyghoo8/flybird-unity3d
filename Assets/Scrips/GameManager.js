#pragma strict


public static var GAMESTATE_MENU = 0;
public static var GAMESTATE_PLAYING = 1;
public static var GAMESTATE_END = 2;


public static var firstBg:Transform;
public static var score:int = 0;
public static var gameState:int = GAMESTATE_MENU;

static var _intance;
public var fBg:Transform;

private var bird:GameObject;


//实例化时执行===
function Awake(){
	_intance = this;
	// 获取 第三个bg === 
	firstBg = fBg || GameObject.Find("bg3").GetComponent.<Transform>();
}

function Start(){
	bird = GameObject.FindGameObjectWithTag("Player");

}

function Update(){
	if(gameState == GameManager.GAMESTATE_MENU){
		if(Input.GetMouseButton(0)){
			gameState = GAMESTATE_PLAYING;
			//set bird is playing
			bird.SendMessage("getLife");
		}

	}

	if(gameState == GameManager.GAMESTATE_END){
		GameMenu._this.gameObject.SetActive(true);
		GameMenu._this.updateScoce(score);
	}
}