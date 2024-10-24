function isClicked(){
    if(document.getElementById("checkbox").checked){
        window.location = "BenchmarkPage.html";
    }else{
        document.getElementById("message").textContent = "You have to check to proceed"
    }
}

const message = document.getElementById("message");
message.style.color="#f54242";
message.style.fontSize = "10px";

document.getElementById("checkbox");
console.dir('checkbox')