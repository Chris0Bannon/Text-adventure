//HOLY SHIT YOU CAN RUN FOR LOOPS BACKWARDS AND THEY DONT HAVE TO START AT 0
// Wait.... should redoo the entire project but instead make an array of maps 
// only and then make the maps an object that have every other value in
//them as a property?  it could be more effecient and easier to call
// the specific things i want with simpler functions.
//i could srsly just have everything be [mapLocation.what i want]

// or we could have a switch function that outputs a different value from the array based
// the case 

// we need a a new function to decide if we are outputting the plotMessage
//or the dialogue into the text area.. .
//we meed another function to determine what dialogue value willbe out input
// we will likely need to make the output from the speach case of our switch function
// to me something novel to allow this.


function dialogueOutputSelector() {
  plotMessage = dialogue[mapLocation];
  gameMessage = "enjoy the above dialogue!";
}

function dialogueOrPlotMessageSelector( //what comes out of the speach case of our switch ){
  if (mapLocation == dialogue) {
    // run dialogueOutputSelector
    //output dialouge

  } else {
    //run plotMessageOutputSelector
    //out put plotMessage
  }
}

