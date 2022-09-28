
var button = document.querySelectorAll(".number-box");
j = 0;


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function (){
        button[j].style.backgroundColor = "hsl(213, 22%, 22%)"
        button[j].style.color= "hsl(217, 12%, 63%)"
        this.style.backgroundColor = "hsl(25, 97%, 53%)";
        this.style.color = "white";
        j = i;
        
    });
    
}


