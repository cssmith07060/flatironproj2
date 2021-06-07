let applicationId = "35c6bd9e"

let apiKey = "c31caa60fd0aa8d7ec8bab645d6d975e";
 var itemType = "chicken"
function loadRecipes() {
    fetch(`https://api.edamam.com/search?q=${itemType}&app_id=${applicationId}&app_key=${apiKey}`)
.then((response) => {
    return response.json();
})
.then((data) => {
   console.log(data);
    let recipeListElement = document.getElementById('Recipelist');
    let recipeType = document.getElementById('RecipeType')
    recipeType.innerHTML = `<h2> recipes for ${itemType}</h2>`
    
    recipeListElement.innerHTML = ""
   
    
    for (let i = 0; i <= data.hits.length; i++){
        let recipeItem = data.hits[i]
        if (recipeItem) {
            
        
            console.log(recipeItem)
            let recipeName = recipeItem.recipe.label
            let recipeImage = recipeItem.recipe.image
            console.log(recipeImage)
            recipeListElement.innerHTML = recipeListElement.innerHTML + recipeName + "<br>"
            recipeListElement.innerHTML = recipeListElement.innerHTML + `<img src="${recipeImage}">` + "<br> <br>"
        }
    }


})
} 
//loadRecipes()
function loadRecipesWithIngredients() {
    fetch(`https://api.edamam.com/search?q=${itemType}&app_id=${applicationId}&app_key=${apiKey}`)
.then((response) => {
    return response.json();
})
.then((data) => {
   console.log(data);
    let recipeListElement = document.getElementById('Recipelist');
    let recipeType = document.getElementById('RecipeType')
    recipeType.innerHTML = `<h2> recipes for ${itemType}</h2>`
   recipeListElement.innerHTML = ""
    
    for (let i = 0; i <= data.hits.length; i++){
        let recipeItem = data.hits[i]
        if (recipeItem) {
            console.log(recipeItem)
            let recipeName = recipeItem.recipe.label
            let recipeImage = recipeItem.recipe.image
            let recipeIngredients = recipeItem.recipe.ingredients
            console.log(recipeImage)
            recipeListElement.innerHTML = recipeListElement.innerHTML + recipeName + "<br>"
            for (let j = 0; j <= recipeIngredients.length; j++) {
                if (recipeIngredients[j]) {
                    recipeListElement.innerHTML = recipeListElement.innerHTML + recipeIngredients[j].text + "<br>"
                    console.log(recipeIngredients[j].text)
                }
                
            }
            
     
     
            recipeListElement.innerHTML = recipeListElement.innerHTML + `<img src="${recipeImage}">` + "<br> <br>"
        }
    }


})
} 
function setType() {
    let typeList = document.getElementById("recipedropdown")
    let selectedItem = typeList.options[typeList.selectedIndex].text
    console.log(selectedItem)
    console.log('this is the set type function') 
    let recipeType = document.getElementById('RecipeType')
  recipeType.innerHTML = `<h2> recipes for ${selectedItem}</h2>`
    itemType = selectedItem
    loadRecipes()
} 
//loadRecipes()
let allRecipes = getAllRecipes()
let filter = ''
let filteredRecipes = filterRecipes(allRecipes, filter)
const searchBar = document.querySelector('#search-bar')

loadMainPage()

searchBar.addEventListener('input', function() {
    filter = searchBar.value.toLowerCase()
    filteredRecipes = filterRecipes(allRecipes, filter)
    renderFilteredRecipes(filteredRecipes)
})

//Click to add a new recipe on its own page
document.querySelector('#add-recipe-button').addEventListener('click', () => {  
    const id = uuidv4()
    window.location.assign(`./add-recipe.html#${id}`)
})

