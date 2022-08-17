setScreen("StartScreen");
onEvent("startBtn", "click", function( ) {
  home();
});
EscapeHouse();
Drawing();
BasketballInfo();
ClickerGame();
Contacts();
ColorSleuth();
Musicapp();



function EscapeHouse() {
  onEvent("escapeHouse", "click", function( ) {
  ("titleScreen");
});
/////////////code for startingscreen when u play
var currentIndex = 0;
////////////start buttons
onEvent("startT", "click", function( ) {
  setScreen("EscapeHousePlay");
  setText("texttt", "You are in room number 1");
  setText("Room#", "1");
});
onEvent("StartP", "click", function( ) {
  setScreen("titleScreen");
});
///////////////////////////////////////Dpad
/////room writings/////
//room #1 
var room1 = {};
room1.up = "door to room 2";
room1.down = "window";
room1.left = "desk1";
room1.right = "door to room 4";
room1.key= "key#1";
//room # 2
var room2 = {};
room2.up = "window";
room2.down = "door to room 1";
room2.left = "desk2";
room2.right = "door to room 3";
room2.key= "key#2";
//room # 3
var room3 = {};
room3.up = "window";
room3.down = "door to room 4";
room3.left = "door to room 2";
room3.right = "desk3";
room3.key= "key#3";
//room # 4
var room4 = {};
room4.up = "door to room 3";
room4.down = "window";
room4.left = "exit window";
room4.right = "desk4";
room4.key= "key#4";
///////////////for the different keys
var keys=[];
//////////////Exit door
var exitDoor= {};
exitDoor.locked==true;
////////////rooms
var rooms = [];
appendItem(rooms, room1);
appendItem(rooms, room2);
appendItem(rooms, room3);
appendItem(rooms, room4);
///////up button
onEvent("UpP", "click", function( ) {
  setText("texttt", rooms[currentIndex].up);
});
/////down button
onEvent("DownP", "click", function( ) {
  setText("texttt", rooms[currentIndex].down);
});
/////left button
onEvent("LeftP", "click", function( ) {
  setText("texttt", rooms[currentIndex].left);
});
///////right button
onEvent("RightP", "click", function( ) {
  setText("texttt", rooms[currentIndex].right);
});
/////////////////////////////////////////////////////////// A button
onEvent("AButtonP", "click", function( ) {
  //to enter room#1
  if (getText("texttt") == "door to room 1") {
    setNumber("Room#", 1);
    setText("texttt", "You are now in room 1");
    currentIndex = 0;
    //to enter room#2
  } else if (getText("texttt") == "door to room 2") {
    setNumber("Room#", 2);
    setText("texttt", "You are now in room 2");
    currentIndex = 1;
     //to enter room#3
  } else if (getText("texttt") == "door to room 3") {
    setNumber("Room#", 3);
    setText("texttt", "You are now in room 3");
    currentIndex = 2;
     //to enter room#4
  } else if (getText("texttt") == "door to room 4") {
    setNumber("Room#", 4);
    setText("texttt", "You are now in room 4");
    currentIndex = 3;
     //desk1
  } else if (getText("texttt") == "desk1") {
    setText("texttt", "Press B to open and get Key#1");
    //exit

  } else if (getText("texttt")== "exit window" && exitDoor.locked==false) {
   setScreen("youwin");
   //locked windows
  } else if ((getText ("texttt")=="window")) {
    setText("texttt", "window is locked");
    //desk2
  } else if (getText("texttt") == "desk2") {
    setText("texttt", "Press B to open and get Key#2");
    //desk3
  } else if (getText("texttt") == "desk3") {
    setText("texttt", "Press B to open and get Key#3");
    //desk4
  } else if (getText("texttt") == "desk4") {
    setText("texttt", "Press B to open and get Key#4");
  }
  
 if (keys.length == 4) {
  
  exitDoor.locked==false;
  if (getText("texttt") == "exit window") {
    setScreen("youwin");
  }
}
});
/////////////////////////////////////////////// B button
onEvent("BButtonP", "click", function( ) {
  //key1
  if (getText("texttt")== "Press B to open and get Key#1") {
    appendItem(keys, "key1");
    setText("texttt", "you got Key#1. Get the others");
    setText("Keyinput", "1");
    room1.left = "you have key, keep looking for more";
    //key2
  } else if ((getText("texttt")== "Press B to open and get Key#2")) {
    appendItem(keys, "key2");
    setText("texttt", "you got Key#2. Get the others");
    setText("Keyinput", "2");
    room2.left = "you have key, keep looking for more";
    //key3
  } else if ((getText("texttt")== "Press B to open and get Key#3")) {
    appendItem(keys, "key3");
    setText("texttt", "you got Key#3. Get the others");
    setText("Keyinput", "3");
    room3.right = "you have key, keep looking for more";
    //key4
  } else if ((getText("texttt")== "Press B to open and get Key#4")) {
    appendItem(keys, "key4");
    setText("texttt", "you got Key#4. get the others.");
    setText("Keyinput", "4");
    room4.right ="you have key, keep looking for more";

  } else {
    
  }

});
}
function Drawing() {
  onEvent("drawingApp", "click", function( ) {
  setScreen("Drawing");
});
function dotRadius(changeX, changeY) {
  var speed = Math.abs(changeX) +Math.abs(changeY);
  var output = 1 + 5/speed;
  return output;
}
setActiveCanvas("canvasMain");
setStrokeColor("rgba(0,0,0,0.3)");
setFillColor("rgba(0,0,0,0.2)");
var eventList = [];
onEvent("Circles", "click", function( ) {
  for (var i = 0; i < 10; i++) {
    setStrokeColor(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
    setFillColor(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
    circle(randomNumber(8, 316), randomNumber(0, 371), randomNumber(10, 20));
  }
});
onEvent("canvasMain", "mousemove", function(event) {
  setStrokeColor("rgba(0,0,0,0.3)");
setFillColor("rgba(0,0,0,0.2)");
  if (event.shiftKey) {
    appendItem(eventList, event);
    circle( event.offsetX, event.offsetY , dotRadius(event.movementX, event.movementY));
  }

});
onEvent("delete", "click", function( ) {
  setStrokeColor("rgba(0,0,0,0.3)");
setFillColor("rgba(0,0,0,0.2)");
  clearCanvas();
  eventList = [];
});
onEvent("random", "click", function( ) {
  setStrokeColor("rgba(0,0,0,0.3)");
setFillColor("rgba(0,0,0,0.2)");
  clearCanvas();
for (var i = 0; i < eventList.length; i++) {
  circle(eventList[i].offsetX, eventList[i].offsetY, randomNumber(5,15 ));
  
}
});
onEvent("original", "click", function( ) {
  setStrokeColor("rgba(0,0,0,0.3)");
setFillColor("rgba(0,0,0,0.2)");
  clearCanvas();
  for (var i = 0; i < eventList.length; i++) {
   circle(eventList[i].offsetX, eventList[i].offsetY, dotRadius(eventList[i].movementX, eventList[i].movementY));
  
  }
});
onEvent("sprayPaint", "click", function( ) {
  setStrokeColor("rgba(0,0,0,0.3)");
setFillColor("rgba(0,0,0,0.2)");
  clearCanvas();
  for (var i = 0; i < eventList.length; i++) {
   for (var j = 0; j < 5; j++) {
     circle((eventList[i]).offsetX + randomNumber(-3, 3), eventList[i].offsetY + randomNumber(-3, 3), 1);
   }
   
  }
});
onEvent("Etchbtn", "click", function( ) {
  clearCanvas();
  setStrokeColor("black");
  setFillColor("black");
  for (var i = 0; i < eventList.length - 10; i++) {
    line(eventList[i].offsetX, eventList[i].offsetY, eventList[i+10].offsetX, eventList[i+10].offsetY);
  }
});
  
}
function BasketballInfo() {
onEvent("bballApp", "click", function( ) {
  setScreen("Title");
});
//Welcome
onEvent("Letsgo", "click", function() {
playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
setScreen("Firstplayer");
});
//Player one
onEvent("Nextplayer#1", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("SecondPlayer");
});
onEvent("Back#1", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("Title");
});
onEvent("Explanation1", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("Explanation#1");
});
//Explanation for player one
onEvent("NextPforExp1", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("SecondPlayer");
});
onEvent("BackFromExp1", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("Firstplayer");
});
//Player two
onEvent("Next#2", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("ThirdPlayer");
});
onEvent("Back#2", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("Firstplayer");
});
onEvent("Explanation#2", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("Explanation#2screen");
});
//Explanation for player two
onEvent("BackExp#2", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("SecondPlayer");
});
onEvent("NextExp2", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("ThirdPlayer");
});
//Playe
onEvent("Back#3", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("SecondPlayer");
});
onEvent("EndButton", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("End");
});
onEvent("Exp#3button", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("Exp#3");
});
onEvent("BackExp#3", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("ThirdPlayer");
});
onEvent("EndExp#3", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("End");
});
onEvent("BAckTobegginging", "click", function() {
  playSound("Basketball Swish sound effect-[AudioTrimmer.com] (1).mp3", false);
  setScreen("Title");
});  
}
function ClickerGame() {
  onEvent("clickerApp", "click", function( ) {
  setScreen("CWelcomeScreen");
});
var Lives = 3;
var Score = 0;
setText("CLivesLabel", Lives);
setText("CScoreLabel", Score);
//Welcome Screen
onEvent("CStartScreenW", "click", function() {
  setScreen("CStartScreen");
});
onEvent("CStartScreenS", "click", function() {
  setScreen("CDifficulty");
});
//Start Screen
function run(time) {
  setScreen("CPlay");
  timedLoop(time, function() {
    setPosition("CClickMe", randomNumber(50, 250), randomNumber(80, 240));
    setPosition("CVillain", randomNumber(50, 250), randomNumber(80, 240));
  });
}
onEvent("easy", "click", function( ) {
  setScreen("CPlay");
});
onEvent("medium", "click", function( ) {
  run(1500);
});
onEvent("hard", "click", function( ) {
  run(1000);
});
onEvent("veryhard", "click", function( ) {
  run(600);
});
//Play Screen
onEvent("CVillain", "click", function() {
  setPosition("CClickMe", randomNumber(50, 250), randomNumber(80, 240));
  setPosition("CVillain", randomNumber(50, 250), randomNumber(80, 240));
  playSound("assets/category_digital/fail.mp3", false);
  Lives = Lives - 1;
  setText("CLivesLabel", Lives);
  if (Lives == 0) {
    playSound("assets/category_female_voiceover/you_lose_female.mp3", false);
    setScreen("CGameover");
  }
});
onEvent("CClickMe", "click", function() {
  playSound("assets/category_digital/coin_3.mp3", false);
  setPosition("CClickMe", randomNumber(50, 250), randomNumber(80, 240));
  setPosition("CVillain", randomNumber(50, 250), randomNumber(80, 240));
  Score = Score + 1;
  setText("CScoreLabel", Score);
  if (Score == 20) {
    playSound("assets/category_female_voiceover/you_win_female.mp3", false);
    setScreen("CYouWon");
  }
});
//Win Screen
onEvent("CStartScreenYW", "click", function() {
  again();
});
//Gameover Screen
onEvent("CStarScreenG", "click", function() {
  again();
});
function again() {
  setScreen("CDifficulty");
  Lives = 3;
  Score = 0;
  setText("CLivesLabel", Lives);
  setText("CScoreLabel", Score);
}


}
function Contacts() {
  onEvent("contactsApp", "click", function( ) {
  refreshLocalData();
});
var currentIndex = 0;

var contacts = [];




//showCurrentContact();

onEvent("RT1", "click", function( ) {
  playSound("assets/category_bell/bells_win.mp3", false);
});
onEvent("RT2", "click", function() {
  playSound("assets/category_bell/bells_win_high.mp3", false);
});
onEvent("RT3", "click", function() {
  playSound("assets/category_bell/bells_win_low.mp3", false);
});
onEvent("RT4", "click", function() {
  playSound("assets/category_achievements/puzzle_game_achievement_big_03.mp3", false);
});
onEvent("RT5", "click", function() {
  playSound("assets/category_achievements/melodic_win_1.mp3", false);
});
onEvent("RT6", "click", function() {
  playSound("assets/category_achievements/peaceful_win_6.mp3", false);
});
onEvent("RT7", "click", function() {
  playSound("assets/category_loops/vibrant_game_coming_closer_pulse_loop_2_accents.mp3", false);
});
onEvent("RT8", "click", function() {
  playSound("assets/category_music/8bit_game_over_1.mp3", false);
});
onEvent("RT9", "click", function() {
  playSound("assets/category_music/8bit_game_over_2.mp3", false);
});
onEvent("RT10", "click", function() {
  playSound("assets/category_music/musical_correct_1.mp3", false);
});
onEvent("RTLbl1", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl2", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl3", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl4", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl5", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl6", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl7", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl8", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl9", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("RTLbl10", "click", function() {
  setText("text_inputRT", "Ringtone Selected!");
});
onEvent("GoBackRT", "click", function() {
  setText("editName", contacts[currentIndex].name);
  setText("editPhone", contacts[currentIndex].phone);
  setText("editBirthday", contacts[currentIndex].birthday);
  setText("editImageURL", contacts[currentIndex].imageURL);
  setImageURL("editImage", contacts[currentIndex].imageURL);
  
  setScreen("editContactsScreen");
});
onEvent("Ringtones", "click", function( ) {
  setScreen("RingtonesScreen");
});
onEvent("viewContactsScreen", "keydown", function(event) {
  if(event.key == "Left"){
    currentIndex--;
    currentIndex = wrap(currentIndex, 0, contacts.length-1);
    showCurrentContact();
  } else if (event.key == "Right"){
    currentIndex++;
    currentIndex = wrap(currentIndex, 0, contacts.length-1);
    showCurrentContact();
  }
});

onEvent("addContactBtn", "click", function() {
  setScreen("addContactsScreen");
});

onEvent("backBtn", "click", function() {
  setScreen("viewContactsScreen");
});

onEvent("saveContactBtn", "click", function( ) {
  console.log(getText("nameInput")+"\n" +getText("phoneInput")+"\n"+getText("birthdayInput")+"\n"+getText("URLinput"));
  var newContact={};
  newContact.name= getText("nameInput");
  newContact.phone= getText("phoneInput");
  newContact.birthday= getText("birthdayInput");
  newContact.imageURL= getText("URLinput");
  appendItem(contacts, newContact);
  showCurrentContact();
  setText("nameInput", "");
  setText("phoneInput", "");
  setText("birthdayInput", "");
  setText("URLinput", "");
  createRecord("myContacts", newContact, function(){
   setScreen("viewContactsScreen");
  });
});

onEvent("URLinput", "input", function( ) {
  setImageURL("previewImage", getText("URLinput"));
});

onEvent("deleteBtn", "click", function( ) {
 var objToDelete=contacts[currentIndex];
 deleteRecord("myContacts", objToDelete, function() {
  refreshLocalData();
  });
});

onEvent("editBackBtn", "click", function( ) {
  setScreen("viewContactsScreen");
});

onEvent("editBtn", "click", function( ) {
  setText("editName", contacts[currentIndex].name);
  setText("editPhone", contacts[currentIndex].phone);
  setText("editBirthday", contacts[currentIndex].birthday);
  setText("editImageURL", contacts[currentIndex].imageURL);
  setImageURL("editImage", contacts[currentIndex].imageURL);
  
  setScreen("editContactsScreen");
});

onEvent("editImageURL", "input", function( ) {
  setImageURL("editImage", getText("editImageURL"));
});

onEvent("updateBtn", "click", function( ) {
  var objToUpdate= contacts[currentIndex];
  objToUpdate.name=getText("editName");
  objToUpdate.phone=getText("editPhone");
  objToUpdate.birthday=getText("editBirthday");
  objToUpdate.imageURL=getText("editImageURL");
  
  updateRecord("myContacts", objToUpdate, function(){
   refreshLocalData();
  });
  
});


///////////////////////////////////////////////////Function Library///////////////////////////////////////////////////

function showCurrentContact(){
  setText("contactInfo", "Name: " +contacts[currentIndex].name +"\n Phone: " +contacts[currentIndex].phone +"\n Birthday: " +contacts[currentIndex].birthday);
  setImageURL("contactImage", contacts[currentIndex].imageURL);
  setScreen("viewContactsScreen");
  
}

function wrap(val, low, high){
  var output;
  if(val < low){
    output = high;
  } else if (val > high){
    output = low;
  } else {
    output = val;
  }
  return output;
}

function refreshLocalData() {
  readRecords("myContacts", {}, function(records){
    contacts=records;
    currentIndex=contacts.length-1;
    showCurrentContact();
  });
}

}
function ColorSleuth() {
onEvent("colorGame", "click", function( ) {
  setScreen("CSDifficulty");
});
var p1Score=0;
var p2Score=0;
var currentPlayer = 1;
var randButtonId;
var level;
onEvent("GPHome", "click", function( ) {
   p1Score=0;
   p2Score=0;
   currentPlayer = 1;
   setText("score1_label", "0");
   setText("score2_label", "0");
});
onEvent("CSGHome", "click", function( ) {
   p1Score=0;
   p2Score=0;
   currentPlayer = 1;
   setText("score1_label", "0");
   setText("score2_label", "0");
});
onEvent("easyCS", "click", function( ) {
  setBoard(30);
  setScreen("gamePlay_screen");
  level = 30;
});
onEvent("mediumCS", "click", function( ) {
  setBoard(27);
  setScreen("gamePlay_screen");
  level = 27;
});
onEvent("hardCS", "click", function( ) {
  setBoard(23);
  setScreen("gamePlay_screen");
  level = 23;
});
onEvent("veryhardCS", "click", function( ) {
  setBoard(20);
  setScreen("gamePlay_screen");
  level = 20;
});
function checkCorrect(buttonId){
    if( buttonId == randButtonId ) {
            updateScoreBy(1);
        } else {
            updateScoreBy(-3);
        }
    setBoard(level);
    switchPlayer();
    setText("score1_label", p1Score);
    setText("score2_label", p2Score);
    checkGameOver();
}
function setBoard(add){
//generate random color 
var R = randomNumber(0,235);
var G = randomNumber(0,235);
var B = randomNumber(0,235);
var color = rgb(R, G, B);
// make all 4 buttons have same color
setProperty("button1", "background-color", color);
setProperty("button2", "background-color", color);
setProperty("button3", "background-color", color);
setProperty("button4", "background-color", color);
//pick a random Button Id 
randButtonId = "button"+randomNumber(1,4);
//set its color to something different 
R = R+add;  
G = G+add;
B = B+add;
var diffColor = rgb(R, G, B);
setProperty(randButtonId, "background-color", diffColor);
}
function checkGameOver() {
  if (p1Score==10) {
    setScreen("gameOver_screen");
    showElement("player1Win_label");
    hideElement("player2Win_label");
  }
  if (p2Score==10) {
    setScreen("gameOver_screen");
    showElement("player2Win_label");
    hideElement("player1Win_label");
  }
}
function switchPlayer(){
    if(currentPlayer==1){
        currentPlayer=2;
        hideElement("player1_highlight");
        showElement("player2_highlight");
    } else {
        currentPlayer=1;
        hideElement("player2_highlight");
        showElement("player1_highlight");
    }
}
function updateScoreBy(amt){
    if(currentPlayer == 1){
        p1Score = p1Score + amt;
    } else {
        p2Score = p2Score + amt;
    }
}
onEvent("hint", "click", function( ) {
  setText("hintText", randButtonId);
  updateScoreBy(-2);
  setText("score1_label", p1Score);
  setText("score2_label", p2Score);
});
onEvent("button1", "click", function(){
    checkCorrect("button1");
});onEvent("button2", "click", function(){
    checkCorrect("button2");
});onEvent("button3", "click", function(){
    checkCorrect("button3");
});onEvent("button4", "click", function(){
    checkCorrect("button4");
});
onEvent("PlayAgainCS", "click", function( ) {
   setScreen("CSDifficulty");
   p1Score=0;
   p2Score=0;
   currentPlayer = 1;
   setText("score1_label", "0");
   setText("score2_label", "0");
});
onEvent("BackCSS", "click", function( ) {
   setScreen("CSDifficulty");
   p1Score=0;
   p2Score=0;
   currentPlayer = 1;
   setText("score1_label", "0");
   setText("score2_label", "0");
});

}
function Musicapp() {
 var currentIndex = 0;

var Music = [];





onEvent("addMusicBtn", "click", function() {
  setScreen("addMusicScreen");
});

onEvent("MbackBtn", "click", function() {
  setScreen("viewMusicScreen");
});

onEvent("saveMusicBtn", "click", function( ) {
  console.log(((getText("MnameInput")+"\n") +getText("artistInput")+"\n")+getText("secondsInput")+"\n"+getText("MURLinput"));
  var newSong={};
  newSong.name= getText("MnameInput");
  newSong.artist= getText("artistInput");
  newSong.seconds= getText("secondsInput");
  newSong.musicURL= getText("MURLinput");
  appendItem(Music, newSong);
  showCurrentSong();
  setText("MnameInput", "");
  setText("artistInput", "");
  setText("secondsInput", "");
  setText("MURLinput", "");
  createRecord("myMusic", newSong, function(record){
   console.log(record);
   setScreen("viewMusicScreen");
  });
});



onEvent("MeditBackBtn", "click", function( ) {
  setScreen("viewMusicScreen");
});

onEvent("MeditBtn", "click", function( ) {
  setText("MeditName", Music[currentIndex].name);
  setText("editArtist", Music[currentIndex].artist);
  setText("editSeconds", Music[currentIndex].seconds);
  
  setScreen("editMusicScreen");
});



onEvent("playMusic", "click", function( ) {
  playSound(getText("urltextArea"), false);
});
onEvent("Stop", "click", function( ) {
  stopSound(getText("urltextArea"));
});


 onEvent("musicApp", "click", function( ) {
  MrefreshLocalData();
 });
 onEvent("MdeleteBtn", "click", function( ) {
 var objToDelete=Music[currentIndex];
 deleteRecord("myMusic", objToDelete, function() {
  MrefreshLocalData();
  });
 });
 onEvent("MupdateBtn", "click", function( ) {
  var objToUpdate= Music[currentIndex];
  objToUpdate.name=getText("MeditName");
  objToUpdate.artist=getText("editArtist");
  objToUpdate.seconds=getText("editSeconds");
  objToUpdate.MimageURL=getText("editMusicURL");
  //setText("MusicInfo", );
  
  updateRecord("myMusic", objToUpdate, function(){
   MrefreshLocalData(objToUpdate.name + "/n" );
  });
  
 });
 function MrefreshLocalData() {
  readRecords("myMusic", {}, function(records){
    Music=records;
    currentIndex=Music.length-1;
    showCurrentSong();
  });
 }
 onEvent("viewMusicScreen", "keydown", function(event) {
  if(event.key == "Left"){
    currentIndex--;
    currentIndex = wrap(currentIndex, 0, Music.length-1);
    showCurrentSong();
  } else if (event.key == "Right"){
    currentIndex++;
    currentIndex = wrap(currentIndex, 0, Music.length-1);
    showCurrentSong();
  }
 });
function showCurrentSong(){
  setText("MusicInfo", ("Name: " +Music[currentIndex].name +"\n Artist: ") +Music[currentIndex].artist +"\n Seconds: " +Music[currentIndex].seconds);
  setScreen("viewMusicScreen");
  
  setText("urltextArea", Music[currentIndex].musicURL);
  
  
}

function wrap(val, low, high){
  var output;
  if(val < low){
    output = high;
  } else if (val > high){
    output = low;
  } else {
    output = val;
  }
  return output;
}

 
}



function home() {
  setScreen("homeScreen");
}

//////////////////////////////////////////////////////////////MAZE APP///////////////////////////////////////////////////////////////////////
onEvent("MazeApp", "click", function( ) {
  setScreen("mazeWelcome");
});
onEvent("StartWM", "click", function() {
  setScreen("MazeStart1");
});
onEvent("Lvl1start", "click", function() {
  setScreen("Level1");
});
onEvent("FinishLevel1", "mouseover", function() {
  setScreen("MazeStart2");
});
onEvent("bckgrnlevel1", "mouseover", function( ) {
  setScreen("MazeStart1");
});
onEvent("Startlvl2", "click", function() {
  setScreen("Level2");
});
onEvent("Finishlvl2", "click", function() {
  setScreen("MazeStart3");
});
onEvent("Lvl2Bcgrnd", "mouseover", function() {
  setScreen("MazeStart2");
});
onEvent("Start3", "click", function() {
  setScreen("Level3");
});
onEvent("Finish3", "click", function() {
  setScreen("mazeStart4");
});
onEvent("Level3Bcgrnd", "mouseover", function( ) {
  setScreen("MazeStart3");
});
onEvent("StartLvl4Ting", "click", function() {
  setScreen("level4");
});
onEvent("Finish4", "mouseover", function() {
  setScreen("GoodGameMaze");
});
onEvent("lvl4Bcgrnd", "mouseover", function( ) {
  setScreen("level4");
});

/////////////////////////////////////////////////////Program for returning to homescreen///////////////////////////////////////////////////////
onEvent("OverHOME", "click", function() {
  home();
});
onEvent("CPHome", "click", function() {
  home();
});
onEvent("CSHome", "click", function() {
  home();
});
onEvent("CHome", "click", function() {
  home();
});
onEvent("CYHome", "click", function() {
  home();
});
onEvent("DHome", "click", function() {
  home();
});
onEvent("EHome", "click", function() {
  home();
});
onEvent("EHHome", "click", function() {
  home();
});
onEvent("CSGHome", "click", function() {
  home();
});
onEvent("GPHome", "click", function() {
  home();
});
onEvent("GGHome", "click", function() {
  home();
});
onEvent("SGHome", "click", function() {
  home();
});
onEvent("BBHome", "click", function() {
  home();
});
onEvent("ESPHHome", "click", function() {
  home();
});
onEvent("ConHome", "click", function() {
  home();
});
onEvent("VMHome", "click", function() {
  home();
});
onEvent("YWHome", "click", function() {
  home();
});
onEvent("GohomeMazeGG", "click", function() {
  home();
});
onEvent("GoHomeLevel1", "click", function() {
  home();
});
onEvent("GoHomeLvl2", "click", function() {
  home();
});
onEvent("GoHomeLvl3", "click", function() {
  home();
});
onEvent("GoHomeLvl4", "click", function( ) {
  home();
});
onEvent("GoHomeCS", "click", function() {
  home();
});
