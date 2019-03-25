//---------------------- Create Mars Field----------------------

for(i = 0; i < 10; i++){
  for(j = 0; j < 10; j++){
   var fieldBox = document.getElementById("mars-field").innerHTML += "<div class='fieldBox' id="+i+","+j+"></div>";
  }
}
// ---------------------- Rover Objects Goes Here ----------------------

var rover = {
direction:"N",
x:0,
y:0,
travelog: ["0,0"],
name:"roverOne"
}
var rover2 = {
direction:"N",
x:9,
y:9,
travelog: ["9,9"],
name:"roverTwo"
}

//----------------------Only R L F B comands are allow ------------------------------------------------

var enterCom = prompt("Enter valid commands for roverOne, please \n (r=right,f=forward,l=left and b=backwards)");
var valCom = new RegExp("^[|r|f|b|l]*$").test(enterCom);
var enterCom2 = prompt("Enter valid commands for roverTwo, please \n (r=right,f=forward,l=left and b=backwards)");
var valCom2 = new RegExp("^[|r|f|b|l]*$").test(enterCom2);

//----------------------Create rover grid array ------------------------------------------------

var roverGrid = [ 
  ['0,0','0,1','0,2','0,3','0,4','0,5','0,6','0,7','0,8','0,9'],
  ['1,0','1,1','1,2','1,3','1,4','1,5','1,6','1,7','1,8','1,9'],
  ['2,0','2,1','2,2','2,3','2,4','2,5','2,6','2,7','2,8','2,9'],
  ['3,0','3,1','3,2','3,3','3,4','3,5','3,6','3,7','3,8','3,9'],
  ['4,0','4,1','4,2','4,3','4,4','4,5','4,6','4,7','4,8','4,9'],
  ['5,0','5,1','5,2','5,3','5,4','5,5','5,6','5,7','5,8','5,9'],
  ['6,0','6,1','6,2','6,3','6,4','6,5','6,6','6,7','6,8','6,9'],
  ['7,0','7,1','7,2','7,3','7,4','7,5','7,6','7,7','7,8','7,9'],
  ['8,0','8,1','8,2','8,3','8,4','8,5','8,6','8,7','8,8','8,9'],
  ['9,0','9,1','9,2','9,3','9,4','9,5','9,6','9,7','9,8','9,9'] ]

//----------------------If comands are correct activate rover ------------------------------------------------

if(valCom === true && valCom2 === true){
	commands(enterCom,rover);
	commands(enterCom2,rover2);
}
else{
	alert("Invalid Command");
	location.reload();
}

//----------------------Movement functions ------------------------------------------------


function turnLeft(rover){
  switch(rover.direction) {
  case "N":
    return rover.direction = "W";
    break;
  case "W":
  return rover.direction = "S";
    break;
  case "S":
  return rover.direction = "E";
    break;
  case "E":
  return rover.direction = "N";
    break;}
};
function turnRight(rover){
  switch(rover.direction) {
    case "N":
      return rover.direction = "E";
      break;
    case "E":
    return rover.direction = "S";
      break;
    case "S":
    return rover.direction = "W";
      break;
    case "W":
    return rover.direction = "N";
      break;}
};
function moveForward(rover){
  switch(rover.direction) {
    case "N":
      return rover.x -= 1;
      break;
    case "E":
    return rover.y += 1;
      break;
    case "S":
    return rover.x += 1;
      break;
    case "W":
    return rover.y -= 1;
      break;}
};
function moveBackward(rover){
  switch(rover.direction) {
    case "N":
      return rover.x += 1;
      break;
    case "E":
    return rover.y -= 1;
      break;
    case "S":
    return rover.x -= 1;
      break;
    case "W":
    return rover.y += 1;
      break;}
};

//----------------------Hit the wall message  ------------------------------------------------

function roverWall(rover){
  if (rover.y < 0){
  rover.y = 0;
  var rovweW = document.getElementById(rover.name).innerHTML += "<p style='color:#ff8c8c;'>rover hit the wall!</p>"; }
  if (rover.x < 0){
    rover.x = 0;
  var rovweW = document.getElementById(rover.name).innerHTML += "<p style='color:#ff8c8c;'>rover hit the wall!</p>"; }
  if (rover.y > 9){
    rover.y = 9;
  var rovweW = document.getElementById(rover.name).innerHTML += "<p style='color:#ff8c8c;'>rover hit the wall!</p>"; }
  if (rover.x > 9){
    rover.x = 9;
  var rovweW = document.getElementById(rover.name).innerHTML += "<p style='color:#ff8c8c;'>rover hit the wall!</p>"; }
};

//---------------------- THE main function starts here  ------------------------------------------------

function commands(str,rover){

		var roverDiv = document.createElement('div');
		roverDiv.id = rover.name;
		roverDiv.className = rover.name;

	   document.getElementById("printcoo").appendChild(roverDiv);
     var degN = 0;

    for(i = 0;i<str.length;i++){
        var turnImg = document.getElementById(rover.travelog[i]);
      if(str[i] === "l"){
        turnLeft(rover);
        var degN = degN-90;
        turnImg.style.webkitTransform = 'rotate('+degN+'deg)';
        turnImg.style.mozTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.msTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.oTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.transform = 'rotate('+degN+'deg)'; 
      }
      if(str[i] === "r"){
        turnRight(rover);
        var degN = degN+90;
        turnImg.style.webkitTransform = 'rotate('+degN+'deg)';
        turnImg.style.mozTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.msTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.oTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.transform = 'rotate('+degN+'deg)';  
      }
      if(str[i] === "f"){
        moveForward(rover);
        turnImg.style.webkitTransform = 'rotate('+degN+'deg)';
        turnImg.style.mozTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.msTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.oTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.transform = 'rotate('+degN+'deg)'; 
      }
      if(str[i] === "b"){
        moveBackward(rover);
        turnImg.style.webkitTransform = 'rotate('+degN+'deg)';
        turnImg.style.mozTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.msTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.oTransform = 'rotate('+degN+'deg)'; 
        turnImg.style.transform = 'rotate('+degN+'deg)'; 
      }

	     roverWall(rover);

       rover.travelog.push(rover.x+","+ rover.y);

//----------------------Print obstacles and alert posible collisions with them ------------------------------------------------

       function colorGrid(roverGrid){
          var colorGrid = document.getElementById(roverGrid);
          colorGrid.style.background = "#8c8838";
                if(rover.travelog[i]===roverGrid){
          alert(rover.name +" hit an obstacle at coordinates "+rover.travelog[i]+" , "+rover.name+" will comeback to the start position, please try again");
          window.location.reload(true);
      }
       };
       colorGrid(roverGrid[1][1]);colorGrid(roverGrid[2][4]);colorGrid(roverGrid[8][9]);colorGrid(roverGrid[3][7]);colorGrid(roverGrid[3][5]);colorGrid(roverGrid[7][1]);

//----------------------Print rover tracking on mars field ------------------------------------------------

     if(rover.name == "roverOne"){
     for(j=0;j<rover.travelog.length;j++){
        var trackfield = document.getElementById(rover.travelog[j]);
        trackfield.style.background = "#ff8c8c";
        trackfield.innerHTML = "<img src='img/rover.svg'>";
     }}
    if(rover.name == "roverTwo"){
     for(j=0;j<rover.travelog.length;j++){
        var trackfield = document.getElementById(rover.travelog[j]);
        trackfield.style.background = "#8ce9ff";
        trackfield.innerHTML = "<img src='img/rover.svg'>";
     }}

//----------------------Print rover's log ------------------------------------------------


     var printCoo = document.getElementById(rover.name).innerHTML += "<p>"+rover.name+" was at "+rover.travelog[i]+"</p>";

    }
      var winfield = document.getElementById(rover.travelog[rover.travelog.length-1]);
     winfield.classList.add("finalstop");

     var printRes = document.getElementById(rover.name).innerHTML += "<p style='color:#68de6c;'>Congratulations "+ rover.name +" get to your coordinates</p><hr align='center' width='300px'>";

};

//----------------------Check rovers possible collisions or intersections ------------------------------------------------
        var out = 0;
     for(i=0;i<rover.travelog.length;i++){
      for(j=0;j<rover2.travelog.length;j++){
        if(rover.travelog[i] === rover2.travelog[j]){
          var out = 1;
          console.log(out);
          break
        }
        else{
          var out = 0;
        }

      }
      if(out === 1){
          alert("Rover and Rover2 crossed their paths!!");
          alert("Try again");
          location.reload(true);
          break;
      }
     };

//----------------------Show log on button click ------------------------------------------------

     function viewLog(){
      var viewLog = document.getElementById("printcoo");
      var btnText = document.querySelector("button");
      viewLog.style.display = viewLog.style.display === 'block' ? '' : 'block';
        if ( btnText.innerHTML === "View Log") {
     btnText.innerHTML = "Hide Log";
        } else {
           btnText.innerHTML = "View Log";
        }
     };



