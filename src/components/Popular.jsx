import { useEffect, useState } from 'react'
import axios from 'axios';

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async() => {
        const APIKEY = import.meta.env.VITE_API_KEY;
        const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=5`)
        setPopular(api.data.recipes)
    }

    console.log(popular)

return(
    <div>
        {popular.map((recipe) => {
            return(
                <div key={recipe.id}>
                    <p>{recipe.title}</p>
                </div>
            )
        })}
    </div>
)
}

export default Popular