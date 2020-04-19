var canvas,backgroundImg;
var pollState = 0;
var voterCount;
var database;
var form,voter,poll;
var allVoters;

var yes1 = 0;
var no1 = 0;
var yes2 = 0;
var no2 = 0;
var yes3 = 0;
var no3 = 0;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();

  poll = new Poll();
  poll.getState();
  poll.start();
}

function draw(){
    if(pollState === 1){
      textSize(15);
      text("Q1: Can we capture stray dogs in our street?",10,50);
      text("Q2: Can you pay Rs.1000 to take this action?",10,125);
      text("Q3: Can we build a library in our street?",10,200);
  }
}
