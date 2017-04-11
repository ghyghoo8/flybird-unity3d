#pragma strict

public var frameCount = 0; // 帧数计数器
public var frameNumber = 10;//每秒帧数
public var timer = 0;


public var animation = false;//是否播放飞行动画
public var canJump = false;//是否可以跳


var rend: Renderer;
var rBody: Rigidbody;

var sp = 3;

function Start () {
	rend = GetComponent.<Renderer>();
	rend.enabled = true;
	rBody = GetComponent.<Rigidbody>();
}

function Update () {
	//debugger
	if(GameManager.gameState == GameManager.GAMESTATE_PLAYING){
		timer  = timer + Time.deltaTime*60;
		if(timer>=1.0f/frameNumber){
			frameCount++;
			timer-=1.0f/frameNumber;
			var frameIndex = frameCount%3;
			//更新bird  offset
			rend.material.SetTextureOffset("_MainTex",new Vector2(0.33333f*frameIndex,0));
		}

		//control jump
		if(Input.GetMouseButton(0)){
			var vel:Vector3 = GetComponent.<Rigidbody>().velocity;
			//向上速度
			rBody.velocity = new Vector3(vel.x,sp,vel.z);
			var audio: AudioSource = GetComponent.<AudioSource>();
			audio.Play();
		}

	}

}

public function getLife(){
	rBody.useGravity = true;
	var vel2:Vector3 = GetComponent.<Rigidbody>().velocity;
	rBody.velocity = new Vector3(sp,vel2.y,vel2.z);
}