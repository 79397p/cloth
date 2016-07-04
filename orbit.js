var canvas = document.getElementById('c');
canvas.width = 700;
canvas.height = 700;
var ctx = canvas.getContext('2d');

window.requestAnimFrame = function (callback) {
    window.setTimeout(callback, 1000/60);
}

var planet;

function update(){
    ctx.clearRect(0, 0, canvas.height, canvas.width);

    var x = 300;
    var y = 300;

    ctx.fillRect(x, y, 10, 10);

    var px = x - planet.x;
    var py = y - planet.y;

    var length = Math.sqrt(Math.pow(px, 2) + Math.pow(py, 2));

    var fx = Math.abs(px);
    var fy = Math.abs(py);

    fx = px/length;
    fy = py/length;
    
    planet.update(fx, fy);
    
    planet.draw();
    requestAnimFrame(update);
}

function init(){
    planet = new Orbitor(240, 240);
    planet.vx = 30;
    planet.vy = -8;
}

function Orbitor(a, b){
    this.x = a;
    this.y = b;
    this.vx = 0;
    this.vy = 0;
}

Orbitor.prototype.update = function(a, b){
    var fx = a;
    var fy = b;

    this.vx = fx + this.vx*0.99;
    this.vy = fy + this.vy*0.99;

    this.x = this.x + this.vx - 0.5*fx;
    this.y = this.y + this.vy - 0.5*fy;
}

Orbitor.prototype.draw = function(){
    ctx.fillRect(this.x-15, this.y-15, 30, 30);
}

init();
update();
