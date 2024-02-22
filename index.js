const lasagna = {}


lasagna.style = function (){
    const lasagnaImage = document.querySelector("body > div > div.recipeimageContainer > img")
    const recipeTitle = document.querySelector("body > div > div.titleContainer")
    const rect = lasagnaImage.getBoundingClientRect()
  
    return recipeTitle.style.top = rect.bottom +35 + 'px'
}

window.addEventListener('resize', lasagna.style)

window.addEventListener('load', lasagna.style)

