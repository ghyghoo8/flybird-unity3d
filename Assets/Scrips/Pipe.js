#pragma strict

var _transform : Transform;
var _audio: AudioSource;

function Start () {
	_transform = GetComponent.<Transform>();
	RandomGeneratePosition();
	_audio = GetComponent.<AudioSource>();
}

function Update () {
	
}

//随机生成坐标offset
function RandomGeneratePosition(){
	var pos_y = Random.Range(-0.4f,-0.1f);
	_transform.localPosition = new Vector3(_transform.localPosition.x,pos_y,_transform.localPosition.z);
}

function OnTriggerExit(other:Collider){
	if(other.tag == "Player"){
		GameManager.score ++;
		_audio.Play();
	}
}

function OnGUI(){
	GUILayout.Label("Score:" + GameManager.score/2);
}