import React, { useEffect, useState } from 'react'
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async() => {
        const api = await axios.get(`https://api.spoonacular.com/recipes/random?apikey=${process.env.RECIPE_API_KEY}`)
        console.log();
    }

    console.log(popular)

//     return (
//     <div>
//         {popular.map((recipes) => {
//             return(
//                 <div key={}>
//                     <p>{recipes.recipe.label}</p>
//                 </div>
//             )
//         })}
//     </div>
//   )
}

export default Popular