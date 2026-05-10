const countText = document.querySelector("#count");
const increaseBtn = document.querySelector("#add");
const decreaseBtn = document.querySelector("#sub");
const resetBtn = document.querySelector("#reset");

let count = 0;

increaseBtn.addEventListener("click",() => {
    count++;
    countText.innerText = count;
    
});

decreaseBtn.addEventListener("click",() => {
    count--;
    countText.innerText = count;
});

resetBtn.addEventListener("click",() => {
    count = 0;
    countText.innerText = count;
})
