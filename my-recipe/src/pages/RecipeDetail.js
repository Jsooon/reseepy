import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function RecipeDetails(){

    const [details, setDetails] = useState();
    const params = useParams();

    useEffect(()=>{
        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+params.id
        }).then((res)=>{
            console.log(res.data.meals[0])
            setDetails(res.data.meals[0])
        })
    }, [])

    const getIngredients = () => {
        let toRet = []
        const ingr = 'strIngredient'
        const msr = 'strMeasure'
        for ( let i = 1; i<=20 ; i ++){
            if (details[ingr +''+i ] && details[ingr +''+i ].length > 0 )
                toRet.push(details[msr +''+i ] + ' ' + details[ingr +''+i ])
        }
        return toRet
    }

    return details && <div className='main-container'>
        <h2>{details.strMeal}</h2>
        <p style={{fontWeight:'300', fontStyle:'italic'}}>{details.strArea +' ' +details.strCategory}</p>
        <br />
        <div style={{display:'flex', justifyContent:'center', marginTop:20, marginBottom:20}}>
            <img style={{width:300,height:300, borderRadius:10}} src={details.strMealThumb} />
        </div>
        <YouTubeIcon/>
        <h3 style={{marginTop:20, marginBottom:10}}>Ingredients:</h3>
        <div>
            {
                getIngredients().map((m)=>{
                    return <div style={{marginTop: 10}}>
                        <div style={{ textAlign:'center'}}>{m}</div>
                    </div>
                })
            }
        </div>
        <h3 style={{marginTop:20, marginBottom:10}}>Instructions:</h3>
        <div style={{whiteSpace: 'pre-wrap'}}>{details.strInstructions}</div>
    </div>

}