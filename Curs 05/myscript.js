let sonic = document.getElementsByClassName("needforspeed")[0];
let tepes = document.getElementsByClassName("aoleu")[0];

document.addEventListener("click", () => {
    tepes.style.transition = "2s all";
    setTimeout(moveLeft, 1000);
})

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        sonic.classList.add("sari");
        setTimeout(() => { sonic.classList.remove("sari")}, 1000)
    }
})

function moveLeft() {
    tepes.classList.add("misca");
    setTimeout(moveBack, 2000);
}

function moveBack() {
    tepes.style.transition = "none";
    tepes.classList.remove("misca");
}

let counter = 0;
setInterval(() => {
    counter++;
    console.log(counter);
    document.getElementsByClassName("timer")[0].innerHTML = counter;

    let interval = setInterval(() => {
        let player = sonic.getBoundingClientRect();
        let obstacol = tepes.getBoundingClientRect();
    
        if (player.right > obstacol.left && player.left < obstacol.right && player.bottom > obstacol.top) {
            alert("ciocnire boss... amenda");
            counter = 0;
        }
    });
}, 1000);




















//setinterval apeleaza un increment la fiecare secunda

// document.body.onkeyup = function(e){
//     if(e.keyCode == 32){
//         document.getElementById("needforspeed").animate([
//             { transform: 'translateY(0px)' },
//             { transform: 'translateY(-200px)' },
//             { transform: 'translateY(0px)' }
//           ], {
//             duration: 1000
//           });
//     }
// }