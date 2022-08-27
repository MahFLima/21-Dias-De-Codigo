const s1 = document.querySelector(".s1");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

var i = 0;

btn1.addEventListener("click", () => {
  if(i < 0){
    i = i + 100
  } else {
    i = 0
  }
  s1.style.marginLeft = `${String(i)}%`;
})

btn1.addEventListener("click", () => {
  if(i < -400){
    i = 0
  } else {
    i = i - 100
  }
  s1.style.marginLeft = `${String(i)}%`;
})

setInterval(() => {
  s1.style.marginLeft = `${String(i)}%`;

  i = i - 100;

  if (i < -400) {
    i = 0;
  }
}, 3000);
