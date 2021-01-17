class Direction {
    constructor() {
    }

    drawDirection() {
        push();
            this.direction();
        pop();
    }

    direction() {
        push();
            textSize(16);
            text('Press l to place  left ball, r to place right ball, press q to stop', 100, 70);
            text('Press z to place left ball and right ball at the same y coordinate', 100, 85);
            text('Press r to reset all the variables', 100, 100);
            text('Press ENTER to start moving ball', 100, 115);
        pop();
    }
    
}