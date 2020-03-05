import React from 'react';
import './Info.scss';
import mugcake from "./assets/mugcake.jpg";
import pancake from "./assets/pancake.jpg";
export function Recepten(props) {
    const recepts = props.recept.map(recept => <div id="RecipeBox" key={recept.id}>
        <img src={pancake} id="recipeimg"/><h1 id="Recipename">{recept.name}</h1> 
        <h3 id="Recipedesc">{recept.description}</h3>
         {recept.tutorial}</div>)
   
   let content = <div>
    <div>
    </div>
    {recepts}
</div>




return content;
}