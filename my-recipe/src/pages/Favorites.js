
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material"
import { useEffect,useState } from "react";
import axios from 'axios';
import Meal from "../components/Meal";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StarBorderIcon from '@mui/icons-material/StarBorder';



export default function Favorites({favorites, isFavorite, addToFavorite, removeFromFavorites}){

    const [meals, setMeals] = useState([])
    const [mealPage, setMealPage] = useState(1)


    useEffect(()=>{
        console.log(favorites)
        setMeals(favorites)
        if (mealPage > favorites.length)
            setMealPage(favorites.length)
    }, [setMealPage, removeFromFavorites])
    useEffect(()=>{
        setMealPage(1)
    }, [])


    return favorites && favorites.length == 0 ?

        <div className='main-container' style={{height: '80vh', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}>
            <div style={{fontSize:100, textAlign:'center'}}>🤷</div>
            <div style={{fontSize:20, textAlign:'center', color:'rgb(35,35,37)', fontSize:"small"}}>No Favorite Recipes found. To add one, click the ⭐ on a recipe.</div>
        </div>
    
        :
        <div className='main-container'>         
        <div class='Meals'> 
        {
            meals && <Meal isFavorite={isFavorite} addToFavorite={addToFavorite} removeFromFavorites={removeFromFavorites} style={{alignSelf:'center'}} info={meals.filter((meal, index)=>{
                return index == mealPage-1
            })[0]}></Meal>
        }
        {
            meals && <Stack sx={{alignSelf:'center'}} spacing={2}>
                <Pagination color="primary" page={mealPage} count={meals.length} onChange={(e, val)=>{ console.log(val); setMealPage(val)}} />
            </Stack>
         }
        </div>
        
    </div>;
}