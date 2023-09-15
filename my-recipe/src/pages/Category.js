
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material"
import { useEffect,useState } from "react";
import axios from 'axios';
import Meal from "../components/Meal";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Loader from "../components/Loader";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchNotFound from "../components/SearchNotFound";



export default function Category({isFavorite, addToFavorite, removeFromFavorites}){

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState()
    const [meals, setMeals] = useState()
    const [mealPage, setMealPage] = useState(1)

    const [search, setSearch] = useState('')
    const [filteredMeals, setFileteredMeals] = useState([])
    const [filterPage, setFilteredPage] = useState(1)

    const [hasLoaded, setLoaded] = useState(false);

    const changeCategory = (newCategory) => {
        axios({
            method : 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + newCategory
        }).then((response)=>{
            console.log(response)
            setCategory(newCategory)
            setMeals(response.data.meals)
            setLoaded(true)
        })
    }

    useEffect(()=>{
        axios({
            method : 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php'
        }).then((response)=>{
            console.log(response)
            response.data.categories.forEach((item, index) =>{
                if (index == 0)
                    changeCategory(item.strCategory)
                setCategories((prev)=> [...prev, item.strCategory] )
            })
        })
    }, [])

    useEffect(()=>{
        changeCategory(category)
    }, [])
    useEffect(()=>{
        setMealPage(1)
    }, [category])

    useEffect(()=>{
        if (meals && search.length > 0){
            setFileteredMeals(
                meals.filter((item)=>{
                    if (item.strMeal.toLowerCase().match(search.toLowerCase()))
                        return item
                })
            )
        }
    }, [search])
    useEffect(()=>{
        setFilteredPage(1)
    }, [filteredMeals])
    useEffect(()=>{
        if (meals)
        setFileteredMeals(
            meals.filter((item)=>{
                if (item.strMeal.toLowerCase().match(search.toLowerCase()))
                    return item
            })
        )
    }, [meals])
    return !hasLoaded ?
            <Loader />
            :
            <div className='main-container'> 
        <FormControl fullWidth sx={{justifyContent:'center'}}>
            <InputLabel id="Category">Category</InputLabel>
            { category && <Select sx={{height:50}} label-id="Category" label="Category"
                defaultValue={category}
                value={category}
                onChange={(event)=>{changeCategory(event.target.value)}}>
                {
                    categories.map((item)=> <MenuItem value={item}>{item}</MenuItem> )
                }
            </Select>
            }
            <TextField
                fullWidth
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                label="Search by Name"
                id="outlined-start-adornment"
                sx={{marginTop:2}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">🔍</InputAdornment>,
                }}
                />
        </FormControl>
        
        <div className='Meals'> 
        {
            search.length == 0 && meals && <Meal isFavorite={isFavorite} addToFavorite={addToFavorite} removeFromFavorites={removeFromFavorites} style={{alignSelf:'center'}} info={meals.filter((meal, index)=>{
                return index == mealPage-1
            })[0]}></Meal>
        }
        {
            search.length == 0 && meals && <Stack sx={{alignSelf:'center'}} spacing={2}>
                <Pagination color="primary" page={mealPage} count={meals.length} onChange={(e, val)=>{ console.log(val); setMealPage(val)}} />
            </Stack>
         }


            {
                search.length > 0 && filteredMeals && <Meal isFavorite={isFavorite} addToFavorite={addToFavorite} removeFromFavorites={removeFromFavorites} style={{alignSelf:'center'}} info={filteredMeals.filter((meal, index)=>{
                    return index == filterPage-1
                })[0]}></Meal>
            }

            {
                search.length > 0 && filteredMeals && filteredMeals.length > 0 && <Stack sx={{alignSelf:'center'}} spacing={2}>
                    <Pagination color="primary" page={filterPage} count={filteredMeals.length} onChange={(e, val)=>{ console.log(val); setFilteredPage(val)}} />
                </Stack>
            }
            {
                search.length > 0 && filteredMeals && filteredMeals.length == 0 && <SearchNotFound search={search} />
            }
        </div>
        
    </div>;
}