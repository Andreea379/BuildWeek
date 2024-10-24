
let countDownValue = 60;

let countDownActive = setInterval(function() {
        if(countDownValue <= 0){
            clearInterval(countDownActive);
            document.getElementById('sec').innerHTML = "0";
        }else{
            document.getElementById('sec').innerHTML = countDownValue ;
        }
        countDownValue = countDownValue - 1;
    }, 1000);


/****************************il seguente codice ricarica la pagina anche se l'utente non ha cliccato nessun bottone,
                                     ma il tempo che aveva a disposizine è scaduto.*********************************/
    
 /*   function refresh() {
         
             window.location.reload(true);

             setTimeout(refresh, 60000);
     }

     setTimeout(refresh, 60000);
*/



     /* *************************il seguente codice ricarica la pagina quando l'utente a clicca il bottone************/
    
    /*const refresh = document.getElementById("refresh");

    function handleClick() {
        window.location.reload();
    }
    refresh.addEventListener("click", handleClick);*/
