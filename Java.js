let count = 0
const nupp1 = document.querySelector("#vajuta")
const value = document.querySelector("#number")

nupp1.addEventListener("click", function(){
    count = count + 1
    value.textContent = count
})