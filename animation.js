
var canvas  = document.getElementById('c');
canvas.width = 900;
canvas.height = 900;
var ctx = canvas.getContext('2d');

window.requestAnimFrame = function (callback) {
        window.setTimeout(callback, 1000 / 60);
};

var gravity = 10;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
    requestAnimFrame(update);
}

function Cloth(){
    var points = [];

}

function Line(p1, p2){
    this.p1 = p1;
    this.p2 = p2;
}

Line.prototype.draw = function(){
    ctx.beginPath();
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
}

function Point(a, b){
    this.x = a;
    this.y = b;
    this.vx; //velocity
    this.vy; //velocity
    this.fx; //x-force
    this.fy; //y-force

    this.attached = [];
}

function drawLine(a, b, c, d){
    ctx.beginPath();
    ctx.moveTo(a,b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

function init(){
    var p1 = new Point(0, 0);
    var p2 = new Point(400, 400);
    var line = new Line(p1, p2);
    line.draw();
    
}

init();
