class Sliders{
    constructor() {
        this.leftAngleSlider = createSlider(-Math.PI / 2, Math.PI / 2, 0, 0.001);;
        this.rightAngleSlider = createSlider(-Math.PI / 2, Math.PI / 2, 0, 0.001);;
        this.leftVelocitySlider = createSlider(-1000, 1000, 0, 0.5);;
        this.rightVelocitySlider = createSlider(-1000, 1000, 0, 0.5);;
        this.leftMassSlider = createSlider(250, 500, 375, 5);;
        this.rightMassSlider = createSlider(250, 500, 375, 5);;
    }

    initiateSlidersWidth() {

        this.leftAngleSlider.style('width', '200px');
        this.rightAngleSlider.style('width', '200px');

        this.leftVelocitySlider.style('width', '200px');
        this.rightVelocitySlider.style('width', '200px');

        this.leftMassSlider.style('width', '200px');
        this.rightMassSlider.style('width', '200px');

    }

    drawSlider() {
        push();
    
            textSize(24);
    
            text('LEFT', 100, 150);
            text('RIGHT', ww - 350, 150);
    
            text('angle: ' + (leftAngle * 180 / Math.PI).toFixed(0), 100, 170);
            this.leftAngleSlider.position(150, 170);
            text('angle: ' + (rightAngle * 180 / Math.PI).toFixed(0), ww - 350, 170);
            this.rightAngleSlider.position(ww - 300, 170);
            
            text('V: ' + leftVelocity, 100, 210);
            this.leftVelocitySlider.position(150, 210);
            text('V: ' + rightVelocity, ww - 350, 210);
            this.rightVelocitySlider.position(ww - 300, 210);
            
            text('m: ' + leftMass, 100, 250);
            this.leftMassSlider.position(150, 250);
            text('m: ' + rightMass, ww - 350, 250);
            this.rightMassSlider.position(ww - 300, 250);
    
        pop();
    }
}