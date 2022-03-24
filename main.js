var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;
    var width = screen.width;
    var newWidth = screen.width - 70;
    var height = screen.height;
    var newHeight = screen.height - 300;
    if (width <992){
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", mytouchstart);
    
    function mytouchstart(e)
    {
        console.log("mytouchstart");
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional
    

        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
     }

     
        canvas.addEventListener("touchmove", mytouchmove);
        function mytouchmove(e)
        {
            currentPositionOftouchX = e.touches[0].clientX - canvas.offsetLeft;
             currentPositionOftouchY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOftouchX + "y = " + currentPositionOftouchY);
        ctx.lineTo(currentPositionOftouchX, currentPositionOftouchY);
        ctx.stroke();
        
        lastPositionOfX = currentPositionOftouchX; 
        lastPositionOfY = currentPositionOftouchY;
     }