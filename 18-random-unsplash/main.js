const btn = document.querySelector(".btn");
const ranImg = document.querySelector(".ran-img")
const request = new XMLHttpRequest();
const url =
  "https://api.unsplash.com/photos/random/?client_id=p4vqwLDoxeuamYzbr-lhF7ZyQMJ73CML3GbyzTqSmro"
let srcImage = ""

async function getPhotos() {
  try {
    const response = await fetch(url)
    const data = await response.json()
    
    ranImg.setAttribute("src", data.urls.raw);
    
  } catch (error) {
    console.log("erro");
  }
}

btn.addEventListener("click", () => {getPhotos()})