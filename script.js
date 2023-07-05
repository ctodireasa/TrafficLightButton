let btn = document.getElementById("btn");
let dictionary = ["red", "yellow", "green"];
let index = 0;

function changingColorsonTrafficLights() {
    btn.style.backgroundColor = dictionary[index];
    ++index;
    if(index == 3) {
        index = 0;
    }
}

setInterval(changingColorsonTrafficLights,10000);