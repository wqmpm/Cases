var data=[
    {img:'1',h1:'Creative',h2:'DUTE'},
    {img:'2',h1:'Friendly',h2:'DEVIL'},
    {img:'3',h1:'Tranquilent',h2:'COMPATRIOT'},
    {img:'4',h1:'Insecure',h2:'HUSSLER'},
    {img:'5',h1:'Loving',h2:'REBEL'},
    {img:'6',h1:'Passionate',h2:'SEEKER'},
    {img:'7',h1:'Crazy',h2:'FRIEND'},
];

var g=function(id){
	if(id.substr(0,1)=='.'){
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

function addSliders(){
    var main_tpl=g('main_template').innerHTML
            .replace(/^\s*/,'')
            .replace(/\s*$/,'');

    var control_tpl=g('control_template').innerHTML
            .replace(/^\s*/,'')
            .replace(/\s*$/,'');
    
    var out_main=[];
    var out_control=[];

    for(i in data){
    	var main_html=main_tpl
    	    .replace(/{{index}}/g,data[i].img)
    	    .replace(/{{h1}}/g,data[i].h1)
    	    .replace(/{{h2}}/g,data[i].h2)
            .replace(/{{css}}/g,['','main_i_right'][i%2]);//“/{{index}}/g”局替换	
    	var control_html=control_tpl
    	    .replace(/{{index}}/g,data[i].img);

    	out_main.push(main_html);//向一个数组的末尾添加元素
    	out_control.push(control_html);
    }
    /*回写到DOM中*/
    g('main_template').innerHTML=out_main.join('');
    g('control_template').innerHTML=out_control.join('');
        
    g('main_template').innerHTML+=main_tpl
        .replace(/{{h1}}/g,data[i].h1)
        .replace(/{{h2}}/g,data[i].h2);
    g('main_{{index}}').id='main_background';
}

function switchSlider(n){
	var main=g('main_'+n);
	var control=g('control_'+n);

	var clear_main=g('.main_i');
    var clear_control=g('.control_i');

    for(var i=0;i<clear_control.length;i++){//不能用clear_main.length,因为多加了一个background
		clear_main[i].className=clear_main[i].className
		    .replace(' main_i_active','');
		clear_control[i].className=clear_control[i].className
		    .replace(' control_i_active','');
	}

	main.className+=' main_i_active';
	control.className+=' control_i_active';

    setTimeout(function(){
        background=g('main_background');
        background.innerHTML=main.innerHTML;
    },1000);
}

function movePictures(){
	var pictures=g('.picture');
	for(var i=0;i<pictures.length;i++){
		pictures[i].style.marginTop=(-1*pictures[i].clientHeight/2)+'px';
	}
}

window.onload=function(){
    addSliders();
    switchSlider(4);
    setTimeout(movePictures,100);
}