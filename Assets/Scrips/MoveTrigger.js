#pragma strict

public var current_bg:Transform;

public var pipe1:Pipe;
public var pipe2:Pipe;

function Start () {
	//current_bg= GetComponent.<Transform>();
}

function Update () {
	
}

//注册碰撞触发事件==
function OnTriggerEnter(other:Collider){
	if(other.tag == "Player"){
		//触发碰撞脚本
		var _firstBg:Transform = GameManager.firstBg;
		current_bg.position = new Vector3(_firstBg.position.x+10, current_bg.position.y, current_bg.position.z); 
		GameManager.firstBg = current_bg;

		pipe1.RandomGeneratePosition();
		pipe2.RandomGeneratePosition();
	}
}
