const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
console.log(number);
console.log(increase);
console.log(decrease);

console.log(number.innerText); // 내용
console.log(increase.offsetTop); // top 위치
console.log(decrease.id); // id

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
  };
  
  decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
  };