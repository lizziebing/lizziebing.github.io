var canvas;
var ctx;
var w,h;
var pic=new Image();
var starpic=new Image();
var num=70;
var stars=[];

var deltatime,lasttime;//设定均匀时间

//requestAnimFrame对不同浏览器的适配
window.requestAnimFrame=(function(){
	return window.requestAnimFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||
	function(/*function FrameRequestCallback*/callback,/*DOMElement Element*/element){
		return window.setTimeout(callback,1000/60);
	};
})();

function init()
{
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext("2d");
    w=canvas.width;
    h=canvas.height;
    pic.src="img/longmao2.jpg";
    starpic.src="img/star.png";

//调用绘制星星的类
    for (var i = 0; i<num; i++) 
    {
    	var obj=new starObj();
    	stars.push(obj);
    	stars[i].inits();
    };

    lasttime=Date.now();
    loop();
}

document.body.onload=init;

function drawBackground()
{
	ctx.fillStyle="#393550";
	ctx.fillRect(0,0,w,h);
}

function loop()
{
	requestAnimFrame(loop);//依据设备性能确定回调时间

	var now=Date.now();
    deltatime=now-lasttime;
    lasttime=now;//确保均匀的时间间隔

	drawBackground();
	drawimg();
	drawStars();
}

function drawimg()
{
	//drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
	//canvas中y轴的正方向向下，坐标原点在左上角
	ctx.drawImage(pic,100,100,600,400);
}

//定义类实现绘制多个星星
var starObj=function()
{
	this.x;
	this.y;
	this.picnum=Math.floor(Math.random()*7);//随机性
	this.timer=0;

	this.xspd;
	this.yspd;
};
starObj.prototype.inits=function()
{
	this.x=Math.random()*600+100;
	this.y=Math.random()*300+100;

//保证对称区间变化
	this.xspd=Math.random()*3-1.5;
	this.yspd=Math.random()*3-1.5;
};
 
 starObj.prototype.update=function()
 {
    this.x+=this.xspd*deltatime*0.006;
    this.y+=this.yspd*deltatime*0.006;
     //超出范围重生
     if (this.x<100||this.x>600)
      {
      	this.inits();
      	return;
      }
     if (this.y<100||this.y>700)
      {this.inits();return;}


 	// 均匀的变化
    this.timer+=deltatime;
    if (this.timer>50)
     {
     	this.picnum+=1;
     	this.picnum%=7;
     	this.timer=0;
     }
 }


starObj.prototype.draw=function()
{
	ctx.drawImage(starpic,this.picnum*7,0,7,7,this.x,this.y,7,7);
};

function drawStars()
{
	for(var i=0;i<num;i++)
	{
		stars[i].update();
		stars[i].draw();
	}
}