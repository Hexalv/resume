  var lines=[];
  var a=0;
function main() {
  //creates dynamic background
  

  

  

  
  lines.push();
  liStart();

  
}

//place line start
function liStart() {
  
  lines[a]= new Object();
  lines[a].xPos = Math.floor(Math.random()*100)+1; 
  lines[a].xSt = Math.floor(Math.random()*100)+1;
  lines[a].yPos = lines[a].xPos;
  lines[a].ySt = Math.floor(Math.random()*100)+1;
  lines[a].inc = (Math.random()*2)+1;
  lines[a].incy = Math.random()*2-1;
  
  console.log(a);
  
  setInterval(liInc, 1);

}
                                                        
//draw line
function liInc(comp) {
  

  if (lines[a].xPos<100) {

    lines[a].xPos += lines[a].inc;
    lines[a].yPos += lines[a].incy;
    
  var can=document.getElementById("backG");
  var ctx=can.getContext("2d");

    ctx.lineWidth=2;    
    ctx.beginPath();
    ctx.moveTo(lines[a].xSt,lines[a].ySt);
    ctx.lineTo(lines[a].xPos, lines[a].yPos);
    ctx.strokeStyle="green";

    ctx.stroke();        
  } else {

  }
}