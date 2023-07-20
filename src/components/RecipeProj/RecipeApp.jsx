import React, { useEffect } from 'react'

const RecipeApp = () => {
const App_id="c8446c2d"
const App_key="c1415a92e900c3f6a0f2d41e5f175e22"

const api={
  // url:"https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429"
  url:"https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2"
}

useEffect(()=>{
  getRecipeData();
},[])

 const getRecipeData=async()=>{
   const data=await fetch(api.url)
   const jsondata=await data.json();
   console.log(jsondata)
  }

  return (
    <div>
        
      <h1>Hello recipe</h1>

    </div>
  )
}

export default RecipeApp