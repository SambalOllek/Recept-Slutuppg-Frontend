import React from 'react';

import './Categories.scss';
import { FetchCategories } from "./services/Service";
import cold from "./assets/cold.jpg";
import hot from "./assets/hot.jpg";
import dessert from "./assets/dessert.jpg";
import snacks from "./assets/snacks.jpg";
import { Link, BrowserRouter } from 'react-router-dom';


export default function Categories() {
    const [categories, setCategory] = React.useState(undefined);

    async function getCategories() {
        const Category = await FetchCategories();
        setCategory(Category);

    }
//getCategories();
//const Categories = () => {
    
    return (
        <div>
            <div id="Hero">
                <div id="Rear">
                    
                    <div class="container">
                        <div class="box">
                            
                            <div class="imgbox">
                                <img src={cold}/>
                            </div>
                            <Link to="/Recipes">
                            <div class="content">
                                <h3>Cold Food</h3>
                                <p>lorem ipsum</p>
                            </div>
                            </Link> 
                        </div>
                   
                    <div class="box">
                            <div class="imgbox">
                                <img src={hot}/>
                            </div>
                            <Link to="/Recipes">
                            <div class="content">
                                <h3>Hot Food</h3>
                                <p>lorem ipsum</p>
                            </div>
                            </Link>
                        </div>
                    
                    <div class="box">
                            <div class="imgbox">
                                <img src={dessert}/>
                            </div>
                            <Link to="/Recipes">
                            <div class="content">
                                <h3>Dessert</h3>
                                <p>lorem ipsum</p>
                            </div>
                            </Link>
                        </div>
                    
                    <div class="box">
                            <div class="imgbox">
                                <img src={snacks}/>
                            </div>
                            <Link to="/Recipes">
                            <div class="content">
                                <h3>Snacks</h3>
                                <p>lorem ipsum</p>
                            </div>
                            </Link>
                        </div>
                        </div>
                        </div>
                        </div>
                    {/* <div class="item item-1" onClick="">
                            <h1>Hot Food</h1>
                            
                        </div>
                        <div class="item item-2">
                            <h1>Cold Food</h1>
                        </div>
                        <div class="item item-3">
                            <h1>Dessert</h1>
                        </div>
                        <div class="item item-4">
                            <h1>Snacks</h1> */}

            <body>

            </body>

        </div>



    )
}
//}