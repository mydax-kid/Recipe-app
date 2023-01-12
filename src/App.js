import "./styles.css";
import { useState, useEffect } from "react";
import Searchinput from "./searchinput";
import Recipe from "./recipe";

function App() {
    const APP_ID = "1c1eb59d";
    const APP_KEY = "21a86ad16de8f6344f877f7b0a5510aa	";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchterm] = useState("");

    useEffect(() => {
        getRecipes();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setSearchterm(search);
        setSearch("");
    };

    return (
        <div className="App">
            <Searchinput
                search={search}
                handleInput={handleInput}
                getSearch={getSearch}
            />

            <div className="flex-wrap">
                {recipes.map((item) => (
                    <Recipe
                        key={item.recipe.label}
                        title={item.recipe.label}
                        ingredients={item.recipe.ingredients}
                        calories={item.recipe.calories}
                        image={item.recipe.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
