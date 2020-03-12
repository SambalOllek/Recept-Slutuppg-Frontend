import React from 'react';
import './Info.scss';
import mugcake from "./assets/mugcake.jpg";
import pancake from "./assets/pancake.jpg";


export function Recepten(props, ) {

    

    const recepts = props.recept.map(recept => 
        
    <div id="RecipeBox" key={recept.id}>
        
    <img src={pancake} id="recipeimg"/>
    <h1 id="Recipename">{recept.name}</h1> 
    <h3 id="Ingredients">{recept.Ingredients}</h3>
    <h3 id="Recipedesc">{recept.description}</h3>
    <p id="Tut">{recept.tutorial}</p>
    </div>)
   
   let content = <div>
    <div>
    </div>
    {recepts}
</div>


return content;
}


export function Ingreds(props) {
    const ingredient = props.ingredients.map(ingredients =>
        <div id="ingBox" key={ingredients.id}>
            <h3 class="text">{ingredients.name}</h3>
            <h3 class="text">{ingredients.amount}</h3>
        </div>)

        let content = <div>
            <div>
                {ingredient}
            </div>
        </div>

return content;
}