import React from 'react';

import './Categories.scss';
import { FetchCategories } from "./services/Service";
import cold from "./assets/cold.jpg";
import hot from "./assets/hot.jpg";
import dessert from "./assets/dessert.jpg";
import snacks from "./assets/snacks.jpg";
import { Link } from 'react-router-dom';


export default function Categories() {
    const [categories, setCategory] = React.useState(undefined);

    async function getCategories() {
        const Category = await FetchCategories();
        setCategory(Category);

    }
    getCategories();

    return (
        <div>
            <div id="Hero">
                <div id="Rear">
                    <div class="container">
                        <div class="box">

                            <div class="imgbox">
                                <img src={cold} />
                            </div>
                            <Link to="/Recipes">
                                <div class="content">
                                    <h3>Cold Food</h3>
                                    <p>Chilled foods perfect for servings that are going to 
                                        be out for a long time and aren't depending on warmth</p>
                                </div>
                            </Link>
                        </div>

                        <div class="box">
                            <div class="imgbox">
                                <img src={hot} />
                            </div>
                            <Link to="/Recipes">
                                <div class="content">
                                    <h3>Hot Food</h3>
                                    <p>Warm foods perfect served for a walking table, 
                                        preferably with the option to stay heated throughout</p>
                                </div>
                            </Link>
                        </div>

                        <div class="box">
                            <div class="imgbox">
                                <img src={dessert} />
                            </div>
                            <Link to="/Recipes">
                                <div class="content">
                                    <h3>Dessert</h3>
                                    <p>The perfect place to find the ultimate dessert 
                                        for an evening of nice food, or maybe just a piece of cake 
                                        to eat in front of the TV</p>
                                </div>
                            </Link>
                        </div>

                        <div class="box">
                            <div class="imgbox">
                                <img src={snacks} />
                            </div>
                            <Link to="/Recipes">
                                <div class="content">
                                    <h3>Snacks</h3>
                                    <p>The ultimate evening snack can be found here! </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <body>
            </body>
        </div>



    )
}