// JavaScript Document
function time(){
    var past=new Date(2016,9,5,0,0,0,0);
	var now=new Date();
	var days;
	var hours;
	var minutes;
	var seconds;
	var miliseconds;
	miliseconds=now-past;
	seconds=parseInt(miliseconds/1000);
	minutes=parseInt(parseInt(miliseconds/1000)/60);
	hours=parseInt(parseInt(parseInt(miliseconds/1000)/60)/60);
	days=parseInt(parseInt(parseInt(parseInt(miliseconds/1000)/60)/60)/24);
	document.getElementById("timeShow").innerHTML=days+"天"+"<br>"+hours+"小时"+"<br>"+minutes+"分钟"+"<br>"+seconds+"秒";
	window.setTimeout("time()",1);
	}
	function hide(){
	$(document).ready(function () {
		$("#div2").fadeToggle(2300);
    });
	}
var count=0;
var my=new Array('我希望有个如你一般的人', '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 如山间清爽的风', '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 如古城温暖的光','&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 从清晨到夜晚','&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 由山野到书房','&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 只要最后是你','&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 就好','&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp lhd&mjy ','&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 很高兴遇见你');
function hideshow(){
    hide();
    if(count<9) {
        document.getElementById('div2').innerHTML = my[count];
        count += 1;
    }
        setTimeout("hide()", 4800);

}
function write() {
        for(var i=0;i<9;i++)
		{
			document.write( my[i]);
             document.write('<br>')
		}
}
function word() {
      setInterval("hideshow()",8100);

}

	function PlayPause()
{
	var audio=document.getElementById('music');
	if(audio.paused)
        audio.play();
    else
        audio.pause();  
}
function all() {
        hide();
        word();
		time();
}
