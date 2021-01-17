function ballCollision() {
    let distance = dist(leftBall.x +  leftBall.movement * Math.cos(leftAngle), leftBall.y + leftBall.movement * Math.sin(leftAngle), 
    rightBall.x + rightBall.movement * Math.cos(rightAngle), rightBall.y + rightBall.movement * Math.sin(rightAngle));

    // console.log(distance);

    if( distance <= d
    && state.state === 'MOVE') {
        leftBall.transferPosition();
        rightBall.transferPosition();

        state.state = 'COLLISIONCENTRAL';

        if(Math.round(leftBall.y) !== Math.round(rightBall.y)){
            state.state = 'COLLISIONDECENTRAL';
        }

        countVelocity();

    }
}

function countVelocity() {
    switch(state.state) {
        case 'COLLISIONCENTRAL' : 
            countVelocityChangeCentral();
            break;
        case 'COLLISIONDECENTRAL' :
            countVelocityChangeDecentral();
            leftBall.movement = createVector(0,0);
            rightBall.movement = createVector(0,0);
            break;
    }
}

function countVelocityChangeCentral() {
    let leftTemp = leftVelocity;
    leftVelocity = (((leftMass - rightMass) * leftVelocity) + (2 * rightMass * rightVelocity)) / (leftMass + rightMass);
    rightVelocity = (((rightMass - leftMass) * rightVelocity) + (2 * leftMass * leftTemp)) / (rightMass + leftMass);
    sliders.leftVelocitySlider.value(leftVelocity);
    sliders.rightVelocitySlider.value(rightVelocity);
}

function countVelocityChangeDecentral() {
    countDecentralAngle();
    getDecentralCollisionVelocity();
}

function countDecentralAngle() {
    colAngle = atan2(leftBall.y - rightBall.y, leftBall.x - rightBall.x);
}

function getDecentralCollisionVelocity() {
    let phi = colAngle - HALF_PI;
    
    let vxl = leftVelocity * Math.cos(leftAngle);
    let vyl = leftVelocity * Math.sin(leftAngle);

    let vxr = rightVelocity * Math.cos(rightAngle);
    let vyr = rightVelocity * Math.cos(rightAngle);

    console.log('left', vxl, vyl, 'right', vxr, vyr);
    
    let vzl = vxl * Math.cos(phi) + vyl * Math.sin(phi);
    let vtl = -vxl * Math.sin(phi) + vyl * Math.cos(phi);

    let vzr = vxr * Math.cos(phi) + vyr * Math.sin(phi);
    let vtr = -vxr * Math.sin(phi) + vyr * Math.cos(phi);

    let vzlnew = ((leftBall.m - rightBall.m) * vzl + 2 * rightBall.m * vzr) / (leftBall.m + rightBall.m);
    let vzrnew = ((rightBall.m - leftBall.m) * vzr + 2 * leftBall.m * vzl) / (leftBall.m + rightBall.m);

    vlCol.x = vtl * Math.cos(-phi) + vzlnew * Math.sin(-phi);
    vlCol.y = -vtl * Math.sin(-phi) + vzlnew * Math.cos(-phi);

    vrCol.x = vtr * Math.cos(-phi) + vzrnew * Math.sin(-phi);
    vrCol.y = -vtr * Math.sin(-phi) + vzrnew * Math.cos(-phi);

    leftVelocity = Math.sqrt(sq(vlCol.x) + sq(vlCol.y));
    rightVelocity = Math.sqrt(sq(vrCol.y) + sq(vrCol.y));

    sliders.leftVelocitySlider.value(leftVelocity);
    sliders.rightVelocitySlider.value(rightVelocity);
    
}