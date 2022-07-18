let numButtons = document.querySelectorAll(".num-btn");
let screen = document.querySelector(".out-screen");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let resultScreen = document.querySelector(".result");
for(let i = 0 ; i < numButtons.length ; i++ ){
    numButtons[i].addEventListener("click" , function (){
         this.classList.add("clicked");
         screen.innerHTML += this.innerHTML ;
        setTimeout(()=>{
            this.classList.remove("clicked");
        } , 100 );
         })
    numButtons[i].addEventListener("blur" , function (){
        this.classList.remove("clicked");
    })
}
clear.addEventListener("click" , function (){
    screen.innerHTML = "";
    resultScreen.innerHTML = "";
})
equal.addEventListener("click" , function (){
    resultScreen.innerHTML = eval(screen.innerHTML);
})
