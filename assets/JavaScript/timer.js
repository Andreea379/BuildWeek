let seconds = document.getElementsByTagName('div');
let circle = document.getElementById('seconds');
let iDontKnow = document.getElementsByClassName('seconds');

let endDate = '00';

let x = setInterval(function(){
    let timer = new Date(endDate).getTime();
    let countDown =  Date().getTime();
    let distance = timer - countDown;

    let s = Math.floor(distance  1000 * 60 / 1000)
})

