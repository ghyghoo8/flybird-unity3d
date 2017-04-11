#pragma strict


public var hitmusic:AudioSource;
public var diemusic:AudioSource;

function Start () {
	
}

function Update () { 
	
}
//碰撞事件
function OnCollisionEnter(other:Collision){
	if(other.gameObject.tag == "Player"){
		GameManager.gameState = GameManager.GAMESTATE_END;
		hitmusic.Play();

		yield WaitForSeconds (0.8);
		diemusic.Play();

	}
}
