import { useEffect, useState } from 'react'
import axios from 'axios';
import { styled } from 'styled-components';

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
    <Wrapper>
        <h3>Popular Picks</h3>
        {popular.map((recipe) => {
            return(
                <Card key={recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                </Card>
            )
        })}
    </Wrapper>
)
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;

    img{
        border-radius: 2rem;
    }
`

export default Popular