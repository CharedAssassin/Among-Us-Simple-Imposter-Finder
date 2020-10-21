//the first update to get percentages
var loop = 0;
while (loop = 0) {
  if (fake > 0) {
    update();
    loop = 1;
  }
}

//the code for all the individual drop down boxes, they had to be seperate so each box can be controlled seperately
var options1 = () => {
  document.getElementById("drpContent1").classList.toggle("show");
}
var options2 = () => {
  document.getElementById("drpContent2").classList.toggle("show");
}
var options3 = () => {
  document.getElementById("drpContent3").classList.toggle("show");
}
var options4 = () => {
  document.getElementById("drpContent4").classList.toggle("show");
}
var options5 = () => {
  document.getElementById("drpContent5").classList.toggle("show");
}
var options6 = () => {
  document.getElementById("drpContent6").classList.toggle("show");
}
var options7 = () => {
  document.getElementById("drpContent7").classList.toggle("show");
}
var options8 = () => {
  document.getElementById("drpContent8").classList.toggle("show");
}
var options9 = () => {
  document.getElementById("drpContent9").classList.toggle("show");
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

//the code for changing the colour of the first square, this needs to be repeated 8 more times for the specific squares
var changeColor1 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color1");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}
//the code for the second squares
var changeColor2 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color2");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}
//code for the third
var changeColor3 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color3");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}
//code for the fourth
var changeColor4 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color4");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}
//code for the fifth
var changeColor5 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color5");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}
//code for the sixth
var changeColor6 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color6");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}
//code for the seventh
var changeColor7 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color7");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}
//code for the eighth
var changeColor8 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color8");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}
//code for the ninth
var changeColor9 = () => {
  let i = window.prompt("What colour would you like to switch this section to? OPTIONS: red, blue, green, pink, orange, yellow, black, white, purple, brown, cyan, lime, green, tan");
  let x = i.toUpperCase();
  let element1 = document.getElementById("color9");
  if (x==="RED") {
    element1.className = "red";
    return 0;
  } else if (x==="BLUE") {
    element1.className = "blue";
    return 0;
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0;
  } else if (x==="PINK") {
    element1.className = "pink";
    return 0;
  } else if (x==="ORANGE") {
    element1.className = "orange";
    return 0;
  } else if (x==="YELLOW") {
    element1.className = "yellow";
    return 0;
  } else if (x==="BLACK") {
    element1.className = "black";
    return 0;
  } else if (x==="WHITE") {
    element1.className = "white";
    return 0;
  } else if (x==="PURPLE") {
    element1.className = "purple";
    return 0;
  } else if (x==="BROWN") {
    element1.className = "brown";
    return 0
  } else if (x==="CYAN") {
    element1.className = "cyan";
    return 0
  } else if (x==="LIME") {
    element1.className = "lime";
    return 0
  } else if (x==="GREEN") {
    element1.className = "green";
    return 0
  } else if (x==="TAN") {
    element1.className = "tan";
    return 0
  } else {
    window.alert("That is not a valid option. Please make sure what you typed was a valid option and/or spelt correctly.");
  }
  update();
}

//the basic percentage mechanics
var total = 9
var fake1 = window.prompt("How many imposters are there?");
var fake = fake1;
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

//updating the colours
var update = () => {
  for (i = 0; i < players.length; i++) {
    if (players[i] === true) {
      document.getElementById(chances[i]).innerHTML = percentage() + "%";
    } else if (players[i] === "imposter") {
      fake = fake - 1;
      players[i] = "imposterK";
      update();
      document.getElementById(chances[i]).innerHTML = "100%";
    } else if (players[i] === "imposterK") {
      players[i] = "imposterK";
      document.getElementById(chances[i]).innerHTML = "100%";
    } else {
      document.getElementById(chances[i]).innerHTML = "0%";
    }
  }
}


//figuring out the percentage
var percentage = () => {
  let i = fake/total*100;
  return Math.floor(i);
}


//updating the total variable
var updateTotal = () => {
  total = total - 1;
}


//dealing with ruling out players, through tasks
var taskDone1 = () => {
  document.getElementById("chance1").innerHTML = "0%";
  players[0] = false;
  updateTotal();
  update();
  console.log(percentage());
}
var taskDone2 = () => {
  document.getElementById("chance2").innerHTML = "0%";
  players[1] = false;
  updateTotal();
  update();
  console.log(percentage());
}
var taskDone3 = () => {
  document.getElementById("chance3").innerHTML = "0%";
  players[2] = false;
  updateTotal();
  update();
  console.log(percentage());
}
var taskDone4 = () => {
  document.getElementById("chance4").innerHTML = "0%";
  players[3] = false;
  updateTotal();
  update();
  console.log(percentage());
}
var taskDone5 = () => {
  document.getElementById("chance5").innerHTML = "0%";
  players[4] = false;
  updateTotal();
  update();
  console.log(percentage());
}
var taskDone6 = () => {
  document.getElementById("chance6").innerHTML = "0%";
  players[5] = false;
  updateTotal();
  update();
  console.log(percentage());
}
var taskDone7 = () => {
  document.getElementById("chance7").innerHTML = "0%";
  players[6] = false;
  updateTotal();
  update();
  console.log(percentage());
}
var taskDone8 = () => {
  document.getElementById("chance8").innerHTML = "0%";
  players[7] = false;
  updateTotal();
  update();
  console.log(percentage());
}
var taskDone9 = () => {
  document.getElementById("chance9").innerHTML = "0%";
  players[8] = false;
  updateTotal();
  update();
  console.log(percentage());
}

//dealing with ruling out players, if they were imposter
var imposter1 = () => {
  document.getElementById("chance1").innerHTML = "100%";
  players[0] = "imposter";
  update();
}
var imposter2 = () => {
  document.getElementById("chance2").innerHTML = "100%";
  players[1] = "imposter";
  update();
}
var imposter3 = () => {
  document.getElementById("chance3").innerHTML = "100%";
  players[2] = "imposter";
  update();
}
var imposter4 = () => {
  document.getElementById("chance4").innerHTML = "100%";
  players[3] = "imposter";
  update();
}
var imposter5 = () => {
  document.getElementById("chance5").innerHTML = "100%";
  players[4] = "imposter";
  update();
}
var imposter6 = () => {
  document.getElementById("chance6").innerHTML = "100%";
  players[5] = "imposter";
  update();
}
var imposter7 = () => {
  document.getElementById("chance7").innerHTML = "100%";
  players[6] = "imposter";
  update();
}
var imposter8 = () => {
  document.getElementById("chance8").innerHTML = "100%";
  players[7] = "imposter";
  update();
}
var imposter9 = () => {
  document.getElementById("chance9").innerHTML = "100%";
  players[8] = "imposter";
  update();
}

//if someone is dead/left the game
var dead1 = () => {
  document.getElementById("chance1").innerHTML = "0%";
  players[0] = false;
  updateTotal();
  update();
}
var dead2 = () => {
  document.getElementById("chance2").innerHTML = "0%";
  players[1] = false;
  updateTotal();
  update();
}
var dead3 = () => {
  document.getElementById("chance3").innerHTML = "0%";
  players[2] = false;
  updateTotal();
  update();
}
var dead4 = () => {
  document.getElementById("chance4").innerHTML = "0%";
  players[3] = false;
  updateTotal();
  update();
}
var dead5 = () => {
  document.getElementById("chance5").innerHTML = "0%";
  players[4] = false;
  updateTotal();
  update();
}
var dead6 = () => {
  document.getElementById("chance6").innerHTML = "0%";
  players[5] = false;
  updateTotal();
  update();
}
var dead7 = () => {
  document.getElementById("chance7").innerHTML = "0%";
  players[6] = false;
  updateTotal();
  update();
}
var dead8 = () => {
  document.getElementById("chance8").innerHTML = "0%";
  players[7] = false;
  updateTotal();
  update();
}
var dead9 = () => {
  document.getElementById("chance9").innerHTML = "0%";
  players[8] = false;
  updateTotal();
  update();
}

var reset = () => {
  for (i=0; i<players.length;i++) {
    players[i] = true;
  }
  total = 9;
  fake = fake1;
  update();
}
