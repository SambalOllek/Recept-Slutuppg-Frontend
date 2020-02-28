import React from 'react';
import './Recipes.scss';
import kebab from "./assets/kebab.jpg";
import hamburger from "./assets/hamburger.jpg";
import hotdog from "./assets/hotdog.jpg";
import wings from "./assets/wings.jpg";

export default function Recipes() {

    return (
        <div>
            <div id="Hero">
                <div id="Rear">
                    <header>
                        <h1>Recipes</h1>
                        <button id="new">Add new recipe</button>
                    </header>
                    <div class="r_container">
                        <div class="card">
                            <div class="r_imgBx" data-text="Kebab">
                            <img src= {kebab}/>
                            </div>
                            <div class="content">
                                <div>
                                    <h3>Kebab</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                    <a href="#">View Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="r_container">
                        <div class="card">
                            <div class="r_imgBx" data-text="Wings">
                            <img src= {wings}/>
                            </div>
                            <div class="content">
                                <div>
                                    <h3>Wings</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                    <a href="#">View Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="r_container">
                        <div class="card">
                            <div class="r_imgBx" data-text="Hamburger">
                            <img src= {hamburger}/>
                            </div>
                            <div class="content">
                                <div>
                                    <h3>Hamburger</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                    <a href="#">View Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="r_container">
                        <div class="card">
                            <div class="r_imgBx" data-text="HotDog">
                            <img src= {hotdog}/>
                            </div>
                            <div class="content">
                                <div>
                                    <h3>HotDog</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                    <a href="#">View Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                 
                </div>
            <body>

            </body>

        </div>


    )
}