
let countDownValue = 60;

let countDownActive = setInterval(function() {
        if(countDownValue <= 0){
            clearInterval(countDownActive);
            document.getElementById('sec').innerHTML = "0";
        }else{
            document.getElementById('sec').innerHTML = countDownValue ;
        }
        countDownValue = countDownValue - 1
    }, 1000);
    