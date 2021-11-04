const API_KEY = "b0b0eebe3f4d4986a5fc8c242ac52da7";
const API_URL = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${API_KEY}`;
const body = document.querySelector("body");
//number of html elements added to page
const numOfItemsDisplayed = 8;
let container;
async function callRAWG() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    body.innerHTML = "";
    for (let i = 0; i < numOfItemsDisplayed; i++) {
      const item = result.results[i];
      body.innerHTML += `<div data-resultInfo = ${item} class ="container"><p class = "name">${item.name}</p><p class ="rating">Rating : ${item.rating}</p> <p class="tags">Tags : ${item.tags.length}</p></div>`;
    }
    container = document.querySelectorAll("div");
    console.log(container);
    for (let i = 0; i < container.length; i++) {
      const tempItem = container[i];
      console.log(tempItem);
      tempItem.addEventListener("click", console.log("hello"));
    }
  } catch (error) {
    alert("Error!: " + error);
  } finally {
    console.log("done");
  }
}
function displayInfo() {
  console.log("hello");
}

setTimeout(() => {
  console.log("hello");
  callRAWG();
}, 500);
