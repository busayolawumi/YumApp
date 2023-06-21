import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async() => {
        const api = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&app_id=9a8c8939&app_key=%2029236ae7cbce5ca7ceb67b9db71d674f&diet=balanced&health=vegetarian&cuisineType=American&mealType=Lunch&random=true')
        setPopular(api.data.hits)
    }

    console.log(popular)

    return (
    <div>
        {popular.map((recipes) => {
            return(
                <p>{recipes.recipe.label}</p>
            )
        })}
    </div>
  )
}

export default Popular