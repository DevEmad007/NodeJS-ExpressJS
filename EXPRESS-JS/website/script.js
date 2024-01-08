const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resultDisplay = document.querySelector(".result");

let result = 0;

const increase = () => {
    result++;
    resultDisplay.innerHTML = result;
};

const decrease = () => {
    result--;
    resultDisplay.innerHTML = result;
};

increaseBtn.addEventListener("click",increase);
decreaseBtn.addEventListener("click",decrease);