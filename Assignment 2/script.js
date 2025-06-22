var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function move() {
    var left = Math.random() * 1000;
    var top = Math.random() * 300;
    var wh = (Math.random() * 100) + 100;

    var shape = document.getElementById("shape");
    shape.style.display = "block";
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    shape.style.backgroundColor = getRandomColor();

    start = new Date().getTime();
}


move();

document.getElementById("shape").addEventListener("click", function() {
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000; // Convert milliseconds to seconds
    alert("You clicked the box in " + timeTaken + " seconds!");
    move();
});