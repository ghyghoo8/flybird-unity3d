#pragma strict


public static var _this:GameMenu;

public var nowST:GUIText;
public var highST:GUIText;
public var startTexture:GUITexture;

function Start () {
	
}

function Update () {
	
}

function Awake(){
	Debug.Log("Awake=======");
	_this = this;
	_this.gameObject.SetActive(false);
}

public function updateScoce(score:float){
	var hightScore:float = PlayerPrefs.GetFloat("score",0);
	if(score > hightScore){
		PlayerPrefs.SetFloat("score",score);
		hightScore = score;
	}

	this.nowST.text = score + "" ;
	this.highST.text = hightScore+"";
	if (Input.GetMouseButtonDown(0) && GameManager.gameState == GameManager.GAMESTATE_END) {
            var rect:Rect = this.startTexture.GetScreenRect();
            var mousePos:Vector3 =  Input.mousePosition;
            if (mousePos.x > rect.x &&
                mousePos.x < (rect.x + rect.width) &&
                mousePos.y > rect.y &&
                mousePos.y < (rect.y + rect.height)
                ) {
                	
                    restartCurrentScene();
            }
        }
}

 public function restartCurrentScene(){
 			Debug.Log("restart=======");
 		 	 var ls:UnityEngine.SceneManagement.SceneManager;
             var scene = ls.GetActiveScene();
             ls.LoadScene(scene.name);
             GameManager.gameState = GameManager.GAMESTATE_MENU;
      }