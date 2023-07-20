import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Cuisine() {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
	}, [params.type]);

	const getCuisine = async (name) => {
		const APIKEY = import.meta.env.VITE_API_KEY;
		const api = await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&number=7&cuisine=${name}`
		);
		setCuisine(api.data.results);
	};

	return (
		<Grid>
			{cuisine.map((item) => {
				return (
					<Card key={item.id}>
						<img src={item.image} />
						<h4>{item.title}</h4>
					</Card>
				);
			})}
		</Grid>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`;

export default Cuisine;
