import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Cuisine() {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams;

	useEffect(() => {
		// getCuisine();
		console.log(params);
	}, []);

	const getCuisine = async (name) => {
		const APIKEY = import.meta.env.VITE_API_KEY;
		const api = await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&number=7&cuisine=italian`
		);
		setCuisine(api.data.results);
		console.log(api);
	};

	return <div>Cuisine</div>;
}

export default Cuisine;
