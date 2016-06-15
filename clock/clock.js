window.onload=function(){
	showtime();
	rta(1);
	rta(2);
	rta(3);
    t=setInterval(showtime,500);	
	t1=setInterval("rta(1)",500);
	t2=setInterval("rta(2)",500);
	t3=setInterval("rta(3)",500*60);
	canvclk();
} 

function rta(pter){
	var nowtime=new Date();
	switch(pter)
	{
		case 1:
		var s=nowtime.getSeconds();
	    var current=s*6;
        var secimg=document.getElementById('target1');
	    secimg.style.transform = 'rotate('+current+'deg)';
	    break;
	    case 2:
	    var m=nowtime.getMinutes();
	    var current=m*6;
        var secimg=document.getElementById('target2');
	    secimg.style.transform = 'rotate('+current+'deg)';
	    break;
	    case 3:
	    var m=nowtime.getMinutes();
	    var h=nowtime.getHours()%12;
	    var current=h*30+m*0.5;
        var secimg=document.getElementById('target3');
	    secimg.style.transform = 'rotate('+current+'deg)';
	    break;
	    default:
	    break;
	}
}

function showtime(){
	var nowtime=new Date();
	var h=nowtime.getHours();
	var m=nowtime.getMinutes();
	var s=nowtime.getSeconds();
	m=checkTime(m)
    s=checkTime(s)
	document.getElementById("show").innerHTML=h+":"+m+":"+s;
}
function checkTime(i){  //补位处理
    if(i<10){
       i='0'+i;
    } 
    return i;
}
function canvclk(){
    var canv=document.getElementById("clkcanvas");
	var cxt=canv.getContext("2d");
	canv.setAttribute("width",400);
	canv.setAttribute("height",400);
	cxt.fillStyle="#efefef";
    cxt.beginPath();
    cxt.arc(200,200,180,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
    cxt.fillStyle="red";
    cxt.beginPath();
    cxt.arc(200,200,20,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
    // drline(cxt,20,200,40,200);
    // drline(cxt,380,200,360,200);
    // drline(cxt,200,20,200,40);
    // drline(cxt,200,380,200,360);
    for(var i=0;i<11;i=i+2){
    	cxt.beginPath();
        cxt.lineWidth=10;
        cxt.strokeStyle="red";
        cxt.arc(200,200,175,i/6*Math.PI,(i+1)/6*Math.PI,false);
        cxt.stroke();
    }

    var c=document.getElementById("target5");
    cxt.drawImage(c,25,25,350,350);
}
function drline(obj,x1,y1,x2,y2){
    obj.lineWidth=10;
    obj.moveTo(x1,y1);
    obj.lineTo(x2,y2);
    obj.stroke();
}

