//API'S & KEY'S
const API_KEY = "b0b0eebe3f4d4986a5fc8c242ac52da7";
const API_URL = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${API_KEY}`;

//selectors
const body = document.querySelector("body");

//variables
const numOfItemsDisplayed = 8;

//Call RAWG API, make a div with p elements inside and insert data from api call then attach it to the body of index.html
async function callRAWG() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    console.log(result);
    body.innerHTML = "";
    for (let i = 0; i < numOfItemsDisplayed; i++) {
      const item = result.results[i];
      //added the "item" in a dataset incase i would want to display the properties in an onclick event or similar
      body.innerHTML += `<div data-resultInfo = ${item} class ="container"><p class = "name">${item.name}</p><p class ="rating">Rating : ${item.rating}</p> <p class="tags">Tags : ${item.tags.length}</p></div>`;
    }
  } catch (error) {
    alert("Error!: " + error);
  } finally {
    console.log("done");
  }
}
//half a sec timeout then run the callRAWG function. timeout to show the loader working
setTimeout(() => {
  callRAWG();
}, 500);
