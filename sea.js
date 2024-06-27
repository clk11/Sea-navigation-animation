let flying = 0;
function create2d(r, c) {
    let arr = new Array(r);
    let yoff = flying -= 0.8;

    for (let i = 0; i < r; i++) {
        let xoff = 0;
        arr[i] = new Array(c);
        for (let j = 0; j < c; j++)
            arr[i][j] = map(noise(yoff += 0.9, xoff), 0, 1, -60, 10);
        xoff += 0.9;
    }
    return arr;
}

class Sea {
    constructor(scale) {
        this.scale = scale;
        this.rows = height / scale;
        this.cols = width / scale;
        this.img = loadImage('./img.png');
    }
    render() {
        stroke('blue');
        fill('aqua');
        let waterHeight = create2d(this.rows, this.cols);
        translate(width / 2, height / 2);
        rotateX(PI / 3);
        translate(-width, -height - 500);
        for (let y = 0; y < this.rows - 1; y++) {
            beginShape(TRIANGLE_STRIP);
            for (let x = 0; x < this.cols; x++) {
                vertex(x * this.scale, y * this.scale, waterHeight[y][x]);
                vertex(x * this.scale, (y + 1) * this.scale, waterHeight[y + 1][x]);
            }
            endShape();
        }
    }
}