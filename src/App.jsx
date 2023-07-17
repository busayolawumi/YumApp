import React from "react";
import Home from "./pages/Home";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Category />
				<Pages />
			</BrowserRouter>
		</>
	);
};

export default App;
