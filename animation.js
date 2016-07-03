


var canvas  = document.getElementById('c');
canvas.width = 900;
canvas.height = 900;
var ctx = canvas.getContext('2d');

window.requestAnimFrame = function (callback) {
        window.setTimeout(callback, 1000 / 60);
};

var points = [100, 150, 300, 120, 440, 600, 55, 57, 800, 440, 23, 500];

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 9; i+=2){
        var a = points[i];
        var b = points[i + 1];
        var c = points[i + 2];
        var d = points[i + 3];
        drawLine(a, b, c, d);
    }
    

    
    
    requestAnimFrame(update);
}

function Point(){
    this.x;
    this.y;
    this.vx; //velocity
    this.vy; //velocity
    this.rp; //right point
    this.lp; // left point
}

function drawLine(a, b, c, d){
    ctx.beginPath();
    ctx.moveTo(a,b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

update();
