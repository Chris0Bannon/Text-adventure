


/* everytime we arrive at a map location we need to check a seperate revisitedLocation
array to see if we have been there before, if we have not been there before, then we need
to push our current maplocation index value into that array.

When choosing what plotMessage to output, we should check revisitedLocation to see if it
contains a value matching our mapLocation index.  If it does,then we would convert our plotMessage
variable into a seperate string from a third array.  Then output that to our plotMessage
textarea explaining that

*/

//HOLY SHIT YOU CAN RUN FOR LOOPS BACKWARDS AND THEY DONT HAVE TO START AT 0

let revisitedLocations = [];

let plotMessage = [];
plotMessage[0] = "here is sample stuff";
plotMessage[1] = "here is sample stuff";
plotMessage[2] = "here is sample stuff";
plotMessage[3] = "here is sample stuff";
plotMessage[4] = "here is sample stuff";
plotMessage[5] = "here is sample stuff";
plotMessage[6] = "here is sample stuff";
plotMessage[7] = "here is sample stuff";
plotMessage[8] = "here is sample stuff";
plotMessage[9] = "hurray it worked";
plotMessage[10] = "hurray it workedhere is sample stuff";
plotMessage[11] = "hurray it workedhere is sample stuff";
plotMessage[12] = "hurray it workedhere is sample stuff";
plotMessage[13] = "hurray it workedhere is sample stuff";
plotMessage[14] = "hurray it workedhere is sample stuff";
plotMessage[15] = "hurray it workedhere is sample stuff";
plotMessage[16] = "hurray it workedhere is sample stuff";
plotMessage[17] = "hurray it workedhere is sample stuff";
plotMessage[18] = "hurray it workedhere is sample stuff";
plotMessage[19] = "hurray it workedhere is sample stuff";


function revisitedMapLocation (mapLocation){
    revisitedLocations.push(mapLocation);
    console.log(revisitedLocations);
}

revisitedMapLocation(6);
revisitedMapLocation(9);
revisitedMapLocation(3);



 function checkForMapReturn (mapLocation){
  for (let i = 0; i < revisitedLocations.length; i++) {
      console.log('in checkForMapReturn', mapLocation);
    if (revisitedLocations[i] == mapLocation){
      console.log('im not stupid');
      console.log(i);
      return true;
    }
  }
  revisitedMapLocation(mapLocation);
  return false;
}

checkForMapReturn(6);
checkForMapReturn(4);
checkForMapReturn(3);

function plotMessageOutputSelector (mapLocation){
  console.log('in plotMessageOutputSelector', mapLocation);
  if (checkForMapReturn(mapLocation)) {
    console.log('it was in there');
    return plotMessage[mapLocation + 10];
  }
  else {
    return plotMessage[mapLocation];
  }
}



/* outputPlot.innerHTML = "<textarea id = plotMessage>" + plotMessage[mapLocation] + "</textarea>"; */
