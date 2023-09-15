
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetail";
import "./styles.css"
import { useState } from "react";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { HashRouter } from "react-router-dom";

function App() {

  const [favorites, setFavorites] = useState([])

  const isFavorite = (info) => {
    for ( let i = 0 ; i < favorites.length ; i ++ ){
      if (favorites[i].idMeal == info.idMeal )
        return true
    }
    return false
  }

  const addToFavorite = (info) => {
    console.log("Added"+ info.idMeal)
    console.log(favorites)
    setFavorites((prev) => [...prev, info])
  }

  const removeFromFavorites = (info) => {
    console.log("Removed"+ info)
    console.log(favorites)
    setFavorites((prev)=>{
      return prev.filter((item)=>{
        return item.idMeal !== info.idMeal
      })
    })
  }

  return (
    <HashRouter basename="/">
    <Routes>
      {/* Root router */}
      <Route path='/' element={<Navbar />}>
        <Route path='' element={<Home isFavorite={isFavorite} addToFavorite={addToFavorite} removeFromFavorites={removeFromFavorites}/>}></Route>
        <Route path='recipes' element={<Recipes isFavorite={isFavorite} addToFavorite={addToFavorite} removeFromFavorites={removeFromFavorites}/>}></Route>
        <Route path='category' element={<Category isFavorite={isFavorite} addToFavorite={addToFavorite} removeFromFavorites={removeFromFavorites}/>}></Route>
        <Route path='favorites' element={<Favorites favorites={favorites} isFavorite={isFavorite} addToFavorite={addToFavorite} removeFromFavorites={removeFromFavorites}/>}></Route>
        <Route path='recipe-details/:id' element={<RecipeDetails/>}></Route>
      </Route>
      {/* End of root router */}
    </Routes>
    </HashRouter>
  );
}

export default App;
