canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width=2;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.rect(150,143,430,200);
ctx.stroke();
ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = width;
    ctx.arc(250,210,40,0,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = width;
    ctx.arc(300, 250, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = width;
    ctx.arc(350, 210, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = width;
    ctx.arc(400, 250, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = width;
    ctx.arc(450, 210, 40, 0, 2 * Math.PI);
    ctx.stroke();


