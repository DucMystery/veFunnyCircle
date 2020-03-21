//Tạo  giá trị hình tròn
function Circle(x,y,radius) {
    this.x=x;
    this.y=y;
    this.radius=radius;
}
// Tạo Giá trị random của màu sắc
function getRandomHex() {
    return Math.floor(Math.random()*255);
}
// Lấy giá trị random của màu sắc
function getRandomColor() {
    let red= getRandomHex();
    let green= getRandomHex();
    let blue= getRandomHex();
    return "rgb("+red+","+green+","+blue+")";
}
// Tạo một hình tròn
function creatCircle() {
    let ctx=document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random()*80);
    let color= getRandomColor();
    let x= Math.random() * Window.innerWidth;
    let y = Math.random() * Window.innerHeight;
    let circle=new Circle(x,y,radius);
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
    ctx.fillStyle =color;
    ctx.fill();
}
// Tạo Nhiều Hình tròn;
function creatMulCircle() {
    for (let i=0;i<30;i++){
        creatCircle();
    }
}

creatMulCircle();