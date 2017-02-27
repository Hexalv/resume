  var lines=[];
  var a=0;
function main() {
  //creates dynamic background
  

  

  

  
  
  liStart(lines, a);

  
}


function liStart(lines, a) {
  lines[a]= new Object();
  lines[a].xPos = 1; 
  lines[a].xSt = 0;
  lines[a].yPos = 1;
  lines[a].ySt = 0;
  lines[a].inc = 1;

  setInterval(liInc, 10);
}

function liInc() {


  if (lines[a].xPos<100) {

    lines[a].xPos += lines[a].inc;
    lines[a].yPos += lines[a].inc;
    
  var can=document.getElementById("backG");
  var ctx=can.getContext("2d");

    ctx.lineWidth=2;    
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(lines[a].xPos, lines[a].yPos);
    ctx.strokeStyle="red";

    ctx.stroke();        
  }
}