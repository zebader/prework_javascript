// Rover Object Goes Here
// ======================
var rover = {
direction:"N",
x:0,
y:0,
travelog: ["0,0"]
}
// ======================
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
      return rover.y -= 1;
      break;
    case "E":
    return rover.x += 1;
      break;
    case "S":
    return rover.y += 1;
      break;
    case "W":
    return rover.x -= -1;
      break;}
};
function moveBackward(rover){
  switch(rover.direction) {
    case "N":
      return rover.y += 1;
      break;
    case "E":
    return rover.x -= 1;
      break;
    case "S":
    return rover.y -= 1;
      break;
    case "W":
    return rover.x += -1;
      break;}
};
function roverWall(rover){
  if (rover.y < 0){
  rover.y = 0;
  console.log("rover hit the wall!")}
  if (rover.x < 0){
    rover.x = 0;
    console.log("rover hit the wall!")}
  if (rover.y > 10){
    rover.y = 10;
    console.log("rover hit the wall!")}
  if (rover.x > 10){
    rover.x = 10;
    console.log("rover hit the wall!")}
};
function commands(str){
    for(i = 0;i<str.length;i++){
      if(str[i] === "l"){
        turnLeft(rover);
      }
      if(str[i] === "r"){
        turnRight(rover);
      }
      if(str[i] === "f"){
        moveForward(rover);
      }
      if(str[i] === "b"){
        moveBackward(rover);
      }
      roverWall(rover);
      rover.travelog.push(rover.x+","+ rover.y);
      console.log(rover.x +","+rover.y);
    }
};
