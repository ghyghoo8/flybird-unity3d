#pragma strict

private var bird:GameObject;
private var birdTransform:Transform;

function Start () {
	bird = GameObject.FindGameObjectWithTag("Player");
	birdTransform = bird.transform;
}

function Update () {
	var self_transform:Transform = GetComponent.<Transform>();
	var bPos:Vector3 = birdTransform.position;
    var y:float= bPos.y-3;

    if(y>0){
    	y = 0;
    }
    if(y<-0.5){
    	y =-0.5;
    }

    self_transform.position = new Vector3(bPos.x+1,y,-10);
}
