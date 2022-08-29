const btn = document.querySelector("#menuBtn")
const content = document.querySelector(".content")

btn.addEventListener("click", function(){
  btn.classList.toggle("open")
  content.classList.toggle("active")
})