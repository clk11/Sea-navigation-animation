class Boat {
    constructor() {
        this.img = loadImage('./img.png');
        this.x = 50;
        this.y = random(10, 400);
        this.boatWidth = 400;
        this.boatHeight = 600;
    }
    move() {
        if (this.x > 3000) {
            this.x = 0;
            this.y = random(10, 400);
        }
        this.x += 40;
        image(this.img, this.x, this.y, this.boatWidth, this.boatHeight);
    }
}
