


var canvas  = document.getElementById('c');
canvas.width = 900;
canvas.height = 900;
var ctx = canvas.getContext('2d');

window.requestAnimFrame = function (callback) {
        window.setTimeout(callback, 1000 / 60);
};

var points = [100, 150, 300, 120, 440, 600, 55, 57, 800, 440, 23, 500];
var gravity = 10;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawLines(points);
    requestAnimFrame(update);
}

function Line(p1, p2){
    this.p1 = p1;
    this.p2 = p2;
}

function Point(){
    this.x;
    this.y;
    this.vx; //velocity
    this.vy; //velocity
    this.fx; //x-force
    this.fy; //y-force

    this.attached = [];
}

function drawLines(points){
    for (var i = 0; i < 9; i+=2){
        var a = points[i];
        var b = points[i + 1];
        var c = points[i + 2];
        var d = points[i + 3];
        drawLine(a, b, c, d);
    }
}

function drawLine(a, b, c, d){
    ctx.beginPath();
    ctx.moveTo(a,b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

update();
