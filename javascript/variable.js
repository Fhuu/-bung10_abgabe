function initiateVariable() {
    d = 128;
    m = 2.5;
    leftAngle = 0;
    rightAngle = 0;
    leftBall = new Ball('left', d, m, -1000, -1000);
    rightBall = new Ball('right', d, m, -1000, -1000);

    colAngle = 0;
    
    vlCol = createVector(0,0);
    vrCol = createVector(0,0);
}

function reset() {

    colAngle = 0;

    leftBall.x = -1000;
    leftBall.y = -1000;
    rightBall.x = -1000;
    rightBall.y = -1000;

    leftBall.movement = 0;
    rightBall.movement = 0;
    

    leftAngle = 0;
    rightAngle = 0;
    sliders.leftAngleSlider.value(0);
    sliders.rightAngleSlider.value(0);

    leftVelocity = 0;
    rightVelocity = 0;
    sliders.leftVelocitySlider.value(0);
    sliders.rightVelocitySlider.value(0);

    leftMass = 375;
    rightMass = 375;
    sliders.leftMassSlider.value(375);
    sliders.rightMassSlider.value(375);

    state.reset();
}