
function main() {
var tTop=document.getElementById("tTop");
var tBot=document.getElementById("tBot");
var ren=document.getElementById("ren");

setInterval(sized, 10);

function sized() {
  var windH=window.innerHeight;
  //set T height/width
  tTop.setAttribute("style","height:" + windH/12+"px");
  tBot.setAttribute("style","width:" + windH/10+"px");
  //set 'ren' size
  ren.setAttribute("style","font-size:" + windH/5+"px");
  ren.setAttribute("style","margin-left:" + 1000+"px");


  }
}
