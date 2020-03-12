import React from 'react';
import './Recipes.scss';
import { FetchRecipes, FetchIngredients } from "./services/Service.js";
import { Recepten, Ingreds } from "./Info.js";
import { Link } from 'react-router-dom';


import kebab from "./assets/kebab.jpg";
import hamburger from "./assets/hamburger.jpg";
import hotdog from "./assets/hotdog.jpg";
import wings from "./assets/wings.jpg";

export default function Recipes() {
    const [recepts, setRecipe] = React.useState([]);
    React.useEffect(() => {
        getIngredients();
        getRecipes();
    }, []);
    const [ingredient, setingredient] = React.useState([])

    async function getRecipes() {
        const Recipe = await FetchRecipes();
        setRecipe(Recipe);
    }
    async function getIngredients() {
        const Ingredient = await FetchIngredients();
        setingredient(Ingredient);
    }

    return (
        <div>
            <div id="Heros">
                <div id="Rear">
                    <header>
                        <h1>Recipes</h1>
                        <Link to="/NewRec">
                        <button id="new" >Add new recipe</button>
                        </Link>
                        <div>
                            
                        <Ingreds ingredients = {ingredient}></Ingreds> <Recepten recept = {recepts}></Recepten>
                            
                            
                        </div>
                    </header>
                    </div> 

                 
                </div>
        </div>


    )
}
