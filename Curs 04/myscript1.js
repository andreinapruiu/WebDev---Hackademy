document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        document.getElementById("needforspeed").animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-150px)' },
            { transform: 'translateY(0px)' }
          ], {
            duration: 1000
          });
    }
}

//needforspeed.style.bottom