//运动框架
function startMove(obj,json,fn){//obj指对象，json包含属性及及对应的属性值，fn指是否回调函数
	var flag=true;//flag放在定时器外面里面都可以，每30msflag重新被赋为true
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		for(var attr in json){
			var icurr=0;
			if(attr=='opacity'){
				icurr=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else{
				icurr=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-icurr)/8;//缓冲运动
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(icurr!=json[attr]){//当未完成运动目标时flag标记为false
				flag=false;
			}
            
	       	if(attr=='opacity'){
	       		obj.style.filter='alpha(opacity:'+(icurr+speed)+')';
	        	obj.style.opacity=(icurr+speed)/100;
	       	}
	       	else{
	       		obj.style[attr]=icurr+speed+'px';
	       	}	    	      
		}
		if(flag){//若flag为true，表示所有运动目标都完成，关闭定时器。注意，此判断放在for in json后面
		    clearInterval(obj.timer);
		    if(fn){
		       	fn();
	        }
	    }     
    },30);
}

function getStyle(obj,attr){//获取obj对象的attr属性值
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}