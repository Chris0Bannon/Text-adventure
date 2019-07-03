

  //Create the map
  var map = [];
  map[0] = "Deep Wood";
  map[1] = "Treefolk's Crossing";
  map[2] = "Crone's Hut";
  map[3] = "Hermit's Thicket";
  map[4] = "Ancient Grove";
  map[5] = "Spore Garden";
  map[6] = "Forest's Edge";
  map[7] = "Verdant Timberline";
  map[8] = "Overgrown Woodland";

  //Create the images
  var images = [];

  images[0] = "deepWood.jpg";
  images[1] = "treefolksCrossing.jpg";
  images[2] = "cronesHut.jpg";
  images[3] = "hermitsThicket.jpg";
  images[4] = "ancientGrove.jpg";
  images[5] = "sporeGarden.jpg";
  images[6] = "forestsEdge.jpg";
  images[7] = "verdantTimberline.jpg";
  images[8] = "overgrownWoodland.jpg";

  //Blocked path messages add in array for specific locations
  var blockedPathMessages = [];
  blockedPathMessages[0] = "You can't go that way!";
  blockedPathMessages[1] = "Don'go north anymore, there is nothing cool over there.";
  blockedPathMessages[2] = "Idk, the game is supposed to end here but I dont know how to do that yet.";
  blockedPathMessages[3] = "You like, cant head any further west, because of some plot reason, or something..";
  blockedPathMessages[4] = "This code shouldn't actually appear in game until I get better at path blocking logic.";
  blockedPathMessages[5] = "Don't go West anymore, it sucks over there.";
  blockedPathMessages[6] = "Why would you try leaving the way you came? thats not very adventurous of you.";
  blockedPathMessages[7] = "You not able to head south here because something";
  blockedPathMessages[8] = "Careful!  The edge of the earth is over there! Dont fall off!";

  // set players start locations
  var mapLocation = 5;

  //initialize the players input
  var playersInput = "";

  //initialize the gameMessage
  var gameMessage = "";

  //Create and array of actions that the game understands
  //and a variable to store the current action
  var actionIKnow = ["north", "east", "south", "west"];
  var action = "";

  //The input and output fields
  var output = document.querySelector("#output");
  var input = document.querySelector("#input");

  //The images
  var image = document.querySelector("img");

  //The button
  var button = document.querySelector("button");
  button.style.cursor = "pointer";
  button.addEventListener("click", clickHandler, false);

  //Display the players location
  render();

  function clickHandler()
  {
      playGame();
  }

  function playGame()
  {
    //Get the player's input and convert it into lowercase
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();

    //Reset these variables from the previous turn
    gameMessage = "";
    action = "";

    //Figure out the players action
    for(var i = 0; i < actionIKnow.length; i ++)
      {if(playersInput.indexOf(actionIKnow[i]) !== -1)
        {
          action = actionIKnow[i];
          console.log("player's action: " + action);
          break;
        }
      }

    //Choose the correct action
    switch(action)
    {
      case "north":
        if (mapLocation >= 3)
        {
          gameMessage = "You went north!";
        mapLocation -= 3;
      }
      else {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;

      case "east":
      if (mapLocation % 3 != 2)
      {
      gameMessage = "You went east!";
      mapLocation += 1;
    }
    else {
      gameMessage = blockedPathMessages[mapLocation];
    }
    break;

      case "south":
      if (mapLocation < 6)
      {
      gameMessage = "you went south";
      mapLocation += 3;
    }
    else {
      gameMessage = blockedPathMessages[mapLocation];
    }
    break;

      case "west":
      if (mapLocation % 3 != 0)
      {
      gameMessage = "You went west!";
      mapLocation -= 1;
    }
    else {
      gameMessage = blockedPathMessages[mapLocation];
    }
    break;

      default:
      gameMessage = "Sorry, I dont know what " + playersInput + " is, try it again silly!";
    }

    //Render the game
    render();
  }

  function render ()
{
  //Render the location
  output.innerHTML = map[mapLocation];

  //Change the image source
  image.src = "images/" + images[mapLocation];

  //Display the gameMessage
  output.innerHTML += "<br><em>" + gameMessage + "</em>";

}
