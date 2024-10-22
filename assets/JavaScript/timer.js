let sec = document.getElementById('sec')

let countDownValue = 60;

const countDownActive = setInterval(() => {
        if(countDownValue <= 0){
            clearInterval(countDownActive);
            document.getElementById("sec").innerHTML = "Finished";
        }else{
            document.getElementById("sec").innerHTML = countDownValue;
        }
        countDownValue -= 1
    }, 1000)
    
ss.