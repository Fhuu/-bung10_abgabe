"use strict";
/**************************************************/
/* Autor:  Diro Baloska s0566367                  */
/*                                                */
/* p5.js Template                                 */
/* Stand: 31.12.2020                              */
/*                                                */
/**************************************************/
/* Variablendeklaration */
var dt;                           // Zeitquant - wird auf die Bildwechselrate bezogen 
var frmRate;                      // Fliesskommadarstellung für Kehrwertbildung notwendig!
var rX;     //ratio von Pixel pro 2mm in X
var rY;     //ratio von Pixel pro 2mm in Y
var centerX;    //0 Punkt des Kartesisches Systems in X Achse
var centerY;    //0 Punk des Kartesisches Systems in Y Achse

//*********** die folgenden Variablen sind Pflicht! *********************/
var canvas;
var canvasID = 'pTest'; // ist eine Variable!!!
var resetButton;

//==VARIABLES==
var d;
var m;
var ballIds;
var ballId;
var leftAngle;
var rightAngle;

var leftVelocity;
var rightVelocity;

var leftMass;
var rightMass;

var colAngle;

var vlCol;
var vrCol;
//===Control===
var placementKey;
var ww;
var sliders;

//Objects
var direction;
var state;
var leftBall;
var rightBall;

//=============


function setup() {
    
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(canvasID);

    frmRate = 60;
    frameRate(frmRate);
    dt = 1.0 / frmRate;
    centerX = windowWidth / 2;
    centerY = windowHeight - (0.05 * windowHeight);
    rX = windowWidth / 2000;
    rY = -rX;  //To invert the - to bottom and + to top need to add - for the ratio
    
    initiateVariable();
    ww = windowWidth;
    direction = new Direction();
    state = new State();
    sliders = new Sliders();
    sliders.initiateSlidersWidth();

    

    
    resetButton = createButton('Start/Reset');
    resetButton.position(100, 30);
    resetButton.mousePressed(reset);
}

function draw() {

    background('#aaaaff');
    
    //******* Darstellung **** Hier wird in Pixeln gerechnet! **********************
    fill('#ff0000');  

    
    
    //******* Berechnung der Bewegung und der Maßstäbe **** Hier wird in Metern gerechnet! **************************		  
    
    direction.drawDirection();
    leftBall.drawBall(state.state);
    rightBall.drawBall(state.state);


    leftAngle = sliders.leftAngleSlider.value();
    rightAngle = sliders.rightAngleSlider.value();

    leftVelocity = sliders.leftVelocitySlider.value();
    rightVelocity = sliders.rightVelocitySlider.value();

    leftMass = sliders.leftMassSlider.value();
    rightMass = sliders.rightMassSlider.value();

    // console.log(state.state);


    sliders.drawSlider();

    ballCollision();
}

function keyTyped() {
    if(key === 'l')
        state.state = 'PL';

    if(key === 'r')
        state.state = 'PR';
    
    if(key === 'q')
        state.state = 'Q';

    if(key === 'z')
        state.state = "PZ";
    
    if(key === 'e')
        reset();

    if(keyCode === 13)
        state.state = 'MOVE';
        
}

function mousePressed() {
    if(state.state === 'PL') {
        leftBall.x = mouseX;
        leftBall.y = mouseY;
    }

    if(state.state === 'PR') {
        rightBall.x = mouseX;
        rightBall.y = mouseY;
    }

    if(state.state === 'PZ') {
        leftBall.y = mouseY;
        rightBall.y = mouseY;

        leftBall.x = 100;
        rightBall.x = ww - 100;
    }
}