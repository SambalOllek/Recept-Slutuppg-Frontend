import React from 'react';
import './Recipes.scss';
import { FetchRecipes } from "./services/Service.js";
import { Recepten } from "./Info.js";
import { Link } from 'react-router-dom';

import kebab from "./assets/kebab.jpg";
import hamburger from "./assets/hamburger.jpg";
import hotdog from "./assets/hotdog.jpg";
import wings from "./assets/wings.jpg";

export default function Recipes() {
    const [recepts, setRecipe] = React.useState([]);

    async function getRecipes() {
        const Recipe = await FetchRecipes();
        setRecipe(Recipe);
    }
getRecipes();
    return (
        <div>
            <div id="Hero">
                <div id="Rear">
                    <header>
                        <h1>Recipes</h1>
                        <Link to="/NewRec">
                        <button id="new" >Add new recipe</button>
                        </Link>
                        <div>
                            <Recepten recept = {recepts}></Recepten>
                            
                        </div>
                    </header>
                    </div> 

                 
                </div>
            <body>

            </body>

        </div>


    )
}
