

  //Create the map
  let map = [];
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
  let images = [];
  images[0] = "deepWood.jpg";
  images[1] = "treefolksCrossing.jpg";
  images[2] = "cronesHut.jpg";
  images[3] = "hermitsThicket.jpg";
  images[4] = "ancientGrove.jpg";
  images[5] = "sporeGarden.jpg";
  images[6] = "forestsEdge.jpg";
  images[7] = "verdantTimberline.jpg";
  images[8] = "overgrownWoodland.jpg";

  //initialize the story
  let plotMessage = [];
  plotMessage[0] = "idk my bff jill";
  plotMessage[1] = "just trying this out2";
  plotMessage[2] = "just trying this out3";
  plotMessage[3] = "just trying this out4";
  plotMessage[4] = "just trying this out5";
  plotMessage[5] = "just trying this out6";
  plotMessage[6] = "You awaken to warm and wet tongue licking your face.  You eyes peel open and are greeted with the slobbery smile of an incredibly large puppy.  You look around at your surroundings as you climb to seated position.  You find yourself in an expansive clearing surronded by a thick forestline bathed in moonlight. You are without your compass and map, but as a forest ranger you are without worry.  As you climb to your feet the pup playfully runs into the treeline to your north west.  The pup pauses to look back to you before dissapearing into the shadows of the forest.";
  plotMessage[7] = "just trying this out8";
  plotMessage[8] = "just trying this out9";

  //Blocked path messages array for specific locations
  let blockedPathMessages = [];
  blockedPathMessages[0] = "You can't go that way!";
  blockedPathMessages[1] = "Don'go north anymore, there is nothing cool over there.";
  blockedPathMessages[2] = "Idk, the game is supposed to end here but I dont know how to do that yet.";
  blockedPathMessages[3] = "You like, cant head any further west, because of some plot reason, or something..";
  blockedPathMessages[4] = "This code shouldn't actually appear in game until I get better at path blocking logic.";
  blockedPathMessages[5] = "Don't go West anymore, it sucks over there.";
  blockedPathMessages[6] = "You should really stick with the puppy.  he is probably a plot device of some sort to guide your adventure.  Try heading north or east to follow him.";
  blockedPathMessages[7] = "you're definetly headed the wrong way.  Try something else.";
  blockedPathMessages[8] = "Careful!  The edge of the earth is over there! Dont fall off!";

  //dialogue box for specific locations
  let dialogue = [];
  dialogue[0] = "this is some sample dialogue."
  dialogue[1] = "this is some sample dialogue."
  dialogue[2] = "this is some sample dialogue."
  dialogue[3] = "this is some sample dialogue."
  dialogue[4] = "this is some sample dialogue."
  dialogue[5] = "this is some sample dialogue."
  dialogue[6] = "You call out to the pup, but it is already gone."
  dialogue[7] = "this is some sample dialogue."
  dialogue[8] = "this is some sample dialogue."


  // set players start locations
  let mapLocation = 6;

  //initialize the players input
  let playersInput = "";

  //initialize the gameMessage
  let gameMessage = "Enter your command into the space below!";

  //Create and array of actions that the game understands
  //and a variable to store the current action
  let actionIKnow = ["north", "east", "south", "west", "speak"];
  let action = "";

  //The input and output fields
  let output = document.querySelector("#output");
  let outputPlot = document.querySelector("#outputPlot");
  let outputMessage = document.querySelector("#outputMessage");
  let input = document.querySelector("#input");

  //The images
  let image = document.querySelector("img");

  //The button
  let button = document.querySelector("button");
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

    case "speak":
    plotMessage[mapLocation] = dialogue[mapLocation];
    gameMessage = "enjoy the above dialogue!";

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
  output.innerHTML = "<p id = maps>" + "You are now located in the "  + map[mapLocation] + "</p>";

  //Change the image source
  image.src = "images/" + images[mapLocation];

  //Display the plotMessage
  outputPlot.innerHTML = "<textarea id = plotMessage>" + plotMessage[mapLocation] + "</textarea>";

  //Display the gameMessage
  outputMessage.innerHTML = "<textarea id = gameMessage>" + gameMessage + "</textarea>";
}
