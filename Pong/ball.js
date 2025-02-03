class Ball extends Drawable {

    x = 450;
    y = 300;
    w = 8;
    h = 8;
    spdX = 2;
    spdY = .5;
    ponged = false;
    fieldheight

    constructor(fldwdth, fldhght){
        super();
        this.fieldheight = fldhght;
        this.x = fldwdth / 2;
        this.y = fldhght / 2
        this.animate();
    }


    isColliding(mO) {
        return this.x + this.w > mO.x &&
            this.y + this.h > mO.y &&
            this.x < mO.x + mO.w &&
            this.y < mO.y + mO.h;
    }


    changeDirection(){
        if(!this.ponged){
            this.spdX *= -1.05;
        }
    }

    animate() {
        setInterval(() => {
            this.x += this.spdX;
            this.y += this.spdY;

            if(this.y >= this.fieldheight - this.h || this.y <= 0){
                this.spdY = this.spdY* -1;
            }
        }, 1000 / 30);
    }
}