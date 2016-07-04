
var canvas  = document.getElementById('c');
canvas.width = 900;
canvas.height = 900;
var ctx = canvas.getContext('2d');

window.requestAnimFrame = function (callback) {
        window.setTimeout(callback, 1000 / 60);
};

var gravity = 10;
var cloth;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimFrame(update);
    cloth.draw();
}

function Cloth(){
    this.points = [];
    this.lines = [];
}

Cloth.prototype.update = function(){
    var arrayLength = this.points.length();
    for (i = 0; i < arraylength; i++){
	this.points.update();
    }
}

Cloth.prototype.draw = function(){
    var arrayLength = this.lines.length;
    for (i = 0; i < arrayLength; i ++){
	this.lines[i].draw();
    }
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

Point.prototype.update = function(){
    this.x += this.vx*t + 0.5*this.fx*t*t;
    this.y += this.vy*t + 0.5*this.fy*t*t;

    var lengthAttached = this.attached.length;
    for (i = 0; i < lengthAttached; i++){
	var p1 = this.attached[i].p1;
	var p2 = this.attached[i].p2;

	
    }
}

function drawLine(a, b, c, d){
    ctx.beginPath();
    ctx.moveTo(a,b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

function init(){
    cloth = new Cloth();
    
    for (i = 0; i < 500; i+=10){
	for (j = 0; j < 500; j+=10){
	    var p1 = new Point(i, j);
	    var p2 = new Point(i, j + 10);
	    var p3 = new Point(i + 10, j);

	    cloth.points.push(p1);
	    cloth.points.push(p2);
	    cloth.points.push(p3);

	    cloth.lines.push(new Line(p1, p2));
	    cloth.lines.push(new Line(p1, p3));
	}
    }
    cloth.draw();
}

init();
//update();
