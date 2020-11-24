//defining arrays used to control all 9 squares in a neat fashion


var arrays = {
  players: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ],
  colors: [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "color9",
  ],
  drpDownId: [
    "drpContent1",
    "drpContent2",
    "drpContent3",
    "drpContent4",
    "drpContent5",
    "drpContent6",
    "drpContent7",
    "drpContent8",
    "drpContent9",
  ],
  chances: [
    "chance1",
    "chance2",
    "chance3",
    "chance4",
    "chance5",
    "chance6",
    "chance7",
    "chance8",
    "chance9",
  ],
  options: [
    "options(0)",
    "options(1)",
    "options(2)",
    "options(3)",
    "options(4)",
    "options(5)",
    "options(6)",
    "options(7)",
    "options(8)",
  ],
  color: [
    "changeColor(0)",
    "changeColor(1)",
    "changeColor(2)",
    "changeColor(3)",
    "changeColor(4)",
    "changeColor(5)",
    "changeColor(6)",
    "changeColor(7)",
    "changeColor(8)",
  ],
  task: [
    "taskDone(0)",
    "taskDone(1)",
    "taskDone(2)",
    "taskDone(3)",
    "taskDone(4)",
    "taskDone(5)",
    "taskDone(6)",
    "taskDone(7)",
    "taskDone(8)",
  ],
  imp: [
    "imposter(0)",
    "imposter(1)",
    "imposter(2)",
    "imposter(3)",
    "imposter(4)",
    "imposter(5)",
    "imposter(6)",
    "imposter(7)",
    "imposter(8)",
  ],
  dead: [
    "dead(0)",
    "dead(1)",
    "dead(2)",
    "dead(3)",
    "dead(4)",
    "dead(5)",
    "dead(6)",
    "dead(7)",
    "dead(8)",
  ],
}

//a function that creates all the elements in the tables
var createElements = () => {
  for (i = 0; i < arrays.colors.length; i++) {
    let element = document.getElementById(arrays.colors[i]);
    let center = document.createElement("center");
    let percentage = document.createElement("span");
    percentage.setAttribute("id", arrays.chances[i]);
    percentage.innerHTML = "%";
    let dropDown = document.createElement("span");
    dropDown.setAttribute("class", "dropdown");
    dropDown.setAttribute("onMouseOver", arrays.options[i])
    dropDown.setAttribute("onMouseLeave", "closeBox()");
    let drpDownContent = document.createElement("span");
    drpDownContent.setAttribute("id", arrays.drpDownId[i]);
    drpDownContent.setAttribute("class", "dropdown-content");
    drpDownContent.setAttribute("onMouseOver", arrays.options[i]);
    drpDownContent.setAttribute("onMouseLeave", "closeBox()");
    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", ":");
    button.setAttribute("onClick", arrays.options[i])
    button.setAttribute("id", "options");
    button.setAttribute("class", "dropbtn")
    //the C at the end of the name is just to seperate it from other functions
    let changeColorC = document.createElement("input");
    changeColorC.setAttribute("type", "button");
    changeColorC.setAttribute("id", "drpItem");
    changeColorC.setAttribute("value", "Change Colour");
    changeColorC.setAttribute("onClick", arrays.color[i]);
    let doingTaskC = document.createElement("input");
    doingTaskC.setAttribute("type", "button");
    doingTaskC.setAttribute("id", "drpItem");
    doingTaskC.setAttribute("value", "Doing Task");
    doingTaskC.setAttribute("onClick", arrays.task[i]);
    let confirmedImpC = document.createElement("input");
    confirmedImpC.setAttribute("type", "button");
    confirmedImpC.setAttribute("id", "drpItem");
    confirmedImpC.setAttribute("value", "Confirmed Imposter");
    confirmedImpC.setAttribute("onClick", arrays.imp[i]);
    let deadOrLeftC = document.createElement("input");
    deadOrLeftC.setAttribute("type", "button");
    deadOrLeftC.setAttribute("id", "drpItem");
    deadOrLeftC.setAttribute("value", "Dead/left");
    deadOrLeftC.setAttribute("onClick", arrays.dead[i]);

    //adding all the elements together so then we have the functioning page
    element.appendChild(center);
    center.appendChild(percentage);
    center.appendChild(dropDown);
    dropDown.appendChild(button);
    dropDown.appendChild(drpDownContent);
    drpDownContent.appendChild(changeColorC);
    drpDownContent.appendChild(doingTaskC);
    drpDownContent.appendChild(confirmedImpC);
    drpDownContent.appendChild(deadOrLeftC);
  }
  update();
}

//defining basic variables that are used to find the percentage each player has of being the imposter
//total is the amount of arrays.players still alive
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
  document.getElementById(arrays.drpDownId[i]).classList.toggle("show");
}
var closeBox = () => {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
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
  let element = document.getElementById(arrays.colors[y]);
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

//dealing with ruling out arrays.players, through tasks
var taskDone = (i) => {
  //a lot of these use an array which takes i, which is an argument saying where in the array, to work out what player
  //if it didn't have that array, the code would have 9 functions that look almost identical to this
  arrays.players[i] = false;
  updateTotal();
  update();
}

//dealing with ruling out arrays.players, if they were imposter
var imposter = (i) => {
  arrays.players[i] = "imposter";
  updateTotal();
  update();
}

//if someone is dead/left the game
var dead = (i) => {
  arrays.players[i] = false;
  updateTotal();
  update();
}

//resetting the percentages so you don't have to reload the page and redo all the colours
var reset = () => {
  for (i=0; i<arrays.players.length;i++) {
    arrays.players[i] = true;
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
  for (i = 0; i < arrays.players.length; i++) {
    if (arrays.players[i] === true) {
      document.getElementById(arrays.chances[i]).innerHTML = percentage() + "%";
    } else if (arrays.players[i] === false) {
      document.getElementById(arrays.chances[i]).innerHTML = "0%";
    } else if (arrays.players[i] === "imposter") {
      fake = fake - 1;
      arrays.players[i] = "imposterK";
      update();
    } else if (arrays.players[i] === "imposterK") {
      arrays.players[i] = "imposterK";
      document.getElementById(arrays.chances[i]).innerHTML = "100%";
    } else {
      document.getElementById(arrays.chances[i]).innerHTML = "0%";
    }
  }
}
//it loops through those items until it finds what each player is and updates them accordingly
