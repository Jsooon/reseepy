
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material"
import { useEffect,useState } from "react";
import axios from 'axios';
import Meal from "../components/Meal";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export default function Home({isFavorite, addToFavorite, removeFromFavorites}){


    const [meal, setMeal] = useState()
    useEffect(()=>{
        axios({
            method : 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        }).then((response)=>{
            setMeal(response.data.meals[0])
        })
    }, [])

    return <div className='main-container'> 
        <h3 style={{textAlign:'center'}}>Random meal of the day</h3>
        <div class='Meals'> 
        {
            meal && <Meal isFavorite={isFavorite} addToFavorite={addToFavorite} removeFromFavorites={removeFromFavorites} style={{alignSelf:'center'}} info={meal}></Meal>
        }
        </div>
        
    </div>;
}