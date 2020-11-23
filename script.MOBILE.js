//defining arrays used to control all 9 squares in a neat fashion
var players = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
]
var chances = [
  "chance1",
  "chance2",
  "chance3",
  "chance4",
  "chance5",
  "chance6",
  "chance7",
  "chance8",
  "chance9",
]
var colors = [
  "color1",
  "color2",
  "color3",
  "color4",
  "color5",
  "color6",
  "color7",
  "color8",
  "color9",
]
var drpDownId = [
  "drpContent1",
  "drpContent2",
  "drpContent3",
  "drpContent4",
  "drpContent5",
  "drpContent6",
  "drpContent7",
  "drpContent8",
  "drpContent9",
]

//defining basic variables that are used to find the percentage each player has of being the imposter
//total is the amount of players still alive
var total = 9
//fake1 is just a holder for fake so then when the reset() function is called we know how many imposters there originally was
var fake1 = window.prompt("How many imposters are there?");
//fake is copied off fake1 to say how many imposters there are currently
var fake = fake1;

//the code for all the individual drop down boxes, they had to be seperate so each box can be controlled seperately

var titleOptions = () => {
  document.getElementById("drpDownTitle").classList.toggle("show");
}

var options = (i) => {
  document.getElementById(drpDownId[i]).classList.toggle("show");
}

//code for closing drop down boxes
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//end drop down box code

//the code for changing the colour of the squares to associate with the colours used in Among Us
var changeColor = (y) => {
  //code to find what colour it is meant to switch to
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime");
  //sets the colour to upper case so it is definitely what the code has been told to look for
  let x = i.toUpperCase();
  //getting the id of the element
  let element = document.getElementById(colors[y]);
  //the if code to find out what colour was actually inputted
  switch (x) {
    case "RED":
      element.className = "red";
      console.log("red");
      break;
    case "BLUE":
      element.className = "blue";
      console.log("blue");
      break;
    case "GREEN":
      element.className = "green";
      break;
    case "PINK":
      element.className = "pink";
      break;
    case "ORANGE":
      element.className = "orange"
      break;
    case "YELLOW":
      element.className = "yellow";
      break;
    case "BLACK":
      element.className = "black";
      break;
    case "WHITE":
      element.className = "white";
      break;
    case "PURPLE":
      element.className = "purple";
      break;
    case "BROWN":
      element.className = "brown";
      break;
    case "CYAN":
      element.className = "cyan";
      break;
    case "LIME":
      element.className = "lime";
      break;
    default:
      window.alert("This was now a valid option. Please make sure it was spelt correctly")
  }
  update();
}

//dealing with ruling out players, through tasks
var taskDone = (i) => {
  //a lot of these use an array which takes i, which is an argument saying where in the array, to work out what player
  //if it didn't have that array, the code would have 9 functions that look almost identical to this
  players[i] = false;
  updateTotal();
  update();
}

//dealing with ruling out players, if they were imposter
var imposter = (i) => {
  players[i] = "imposter";
  updateTotal();
  update();
}

//if someone is dead/left the game
var dead = (i) => {
  players[i] = false;
  updateTotal();
  update();
}

//resetting the percentages so you don't have to reload the page and redo all the colours
var reset = () => {
  for (i=0; i<players.length;i++) {
    players[i] = true;
  }
  total = 9;
  fake = fake1;
  update();
}

//updating the total variable so a dead player will not be counted as imposter unless voted out
var updateTotal = () => {
  total = total - 1;
}

//the function used to figure out the percentage each living player has of being the imposter
var percentage = () => {
  let i = fake/total*100;
  return Math.floor(i);
}

//the code to change how many imposters there are
var changeFake = () => {
  fake1 = window.prompt("How many imposters are there?");
  fake = fake1;
  update()
}

//updating the colours
//this function scans through the array of player status, there is true, for alive and not knowing whether innocent or imposterK
//false, for either dead or innocent
//imposter, for confirmed imposter
//imposterK is so that someone declared imposter will not be marked as imposter twice. Without this, it will decrease everyone elses imposter chance because it thinks you caught both not just one
var update = () => {
  for (i = 0; i < players.length; i++) {
    if (players[i] === true) {
      document.getElementById(chances[i]).innerHTML = percentage() + "%";
    } else if (players[i] === false) {
      document.getElementById(chances[i]).innerHTML = "0%";
    } else if (players[i] === "imposter") {
      fake = fake - 1;
      players[i] = "imposterK";
      update();
    } else if (players[i] === "imposterK") {
      players[i] = "imposterK";
      document.getElementById(chances[i]).innerHTML = "100%";
    } else {
      document.getElementById(chances[i]).innerHTML = "0%";
    }
  }
}
//it loops through those items until it finds what each player is and updates them accordingly
