class Ball{
    constructor(id, d, m, x, y) {
        this.id = id;
        this.d = d;
        this.m = m;
        this.x = x;
        this.y = y;
        this.color = '#00ff00';
        this.movement = 0;
    }

    drawBall(state) {
        
        switch(state) {
            case 'MOVE' :
                this.drawMoving();
                break;
            case 'COLLISIONCENTRAL' :
                this.drawMoving();
                break;
            case 'COLLISIONDECENTRAL' :
                this.drawCollision();
                break;
            default: 
                this.drawNormal();
        }
        
    }

    drawNormal() {
        push();
            translate(this.x, this.y);
            this.id === 'left' ? rotate(leftAngle) : rotate(rightAngle);
            fill(color(this.color));
            circle(0, 0, this.d);
            this.id === 'left' ? stroke(color('#000000')) : stroke(color('#ffffff'));
            line(-this.x * 2, 0, ww * 2, 0);
            rotate(0);
            this.id === 'left' ? fill(color('#000000')) : fill(color('#ffffff'));
            textSize(24);
            this.id === 'left' ? text(this.id + '>>>', -30, 0) : text('<<<' + this.id, -30, 0);
        pop();
    }

    drawMoving() {
        console.log('left', leftVelocity, leftAngle, 'right', rightVelocity, rightAngle);
        this.movement += this.id === 'left' ? leftVelocity * dt : rightVelocity * dt;
        push();
            translate(this.x, this.y);

            this.id === 'left' ? 
                circle(this.movement * Math.cos(leftAngle), this.movement * Math.sin(leftAngle), this.d) :  
                circle(this.movement * Math.cos(rightAngle), this.movement * Math.sin(rightAngle), this.d);
                
            this.id === 'left' ? fill(color('#000000')) : fill(color('#ffffff'));
            textSize(24);
            this.id === 'left' ? text(this.id + '>>>', -30 + this.movement * Math.cos(leftAngle), this.movement * Math.sin(leftAngle)) : text('<<<' + this.id, -30 + this.movement * Math.cos(rightAngle), this.movement * Math.sin(rightAngle));
            
            this.id === 'left' ? rotate(leftAngle) : rotate(rightAngle);
            fill(color(this.color));
            this.id === 'left' ? stroke(color('#000000')) : stroke(color('#ffffff'));
            line(-this.x * 2, 0, ww * 2, 0);


            // rotate(0);
        pop();
    }

    drawCollision() {
        if(this.id === 'left') {
            this.movement.x += vlCol.x * dt;
            this.movement.y += vlCol.y * dt;
        } else {
            this.movement.x += vrCol.x * dt;
            this.movement.y += vrCol.y * dt;
        }
        push();
            translate(this.x, this.y);

            circle(this.movement.x, this.movement.y, this.d);
            
            this.id === 'left' ? fill(color('#000000')) : fill(color('#ffffff'));
            textSize(24);
            this.id === 'left' ? text(this.id + '>>>', -30 + this.movement.x, this.movement.y) : text('<<<' + this.id, -30 + this.movement.x, this.movement.y);

            this.id === 'left' ? rotate(leftAngle) : rotate(rightAngle);
            fill(color(this.color));
            this.id === 'left' ? stroke(color('#000000')) : stroke(color('#ffffff'));
            line(-this.x * 2, 0, ww * 2, 0);
            
        pop();
    }

    transferPosition() {
        if(this.id === 'left') {
            this.x = this.x + this.movement * Math.cos(leftAngle);
            this.y = this.y + this.movement * Math.sin(leftAngle);
        }

        if(this.id === 'right') {
            this.x = this.x + this.movement * Math.cos(rightAngle);
            this.y = this.y + this.movement * Math.sin(rightAngle);
        }
        this.movement = 0;
    }

    reset() {
        this.x = 0;
        this.y = 0;
    }
}