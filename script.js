const counter = document.querySelector(".status1");
const incrementBtn = document.querySelector(".increment")
const decrementBtn = document.querySelector(".decrement")
const resetBtn = document.querySelector(".reset")

let count = 0;

function upadteCounter(){
    counter.textContent = count
}

incrementBtn.addEventListener("click",()=>{
    count++;
    upadteCounter()
})

decrementBtn.addEventListener("click",()=>{
    count--;
    upadteCounter()
})

resetBtn.addEventListener("click",()=>{
    count=0;
    upadteCounter()
})