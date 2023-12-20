let divs = document.querySelectorAll(".box")
divs[0].innerText = "Hello"
divs[1].innerText = "I am "
divs[2].innerText = "Hhere"
divs[3].innerText = "only for you"


let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`
    idx++
}