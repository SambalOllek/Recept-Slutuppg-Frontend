import React from 'react';
import './FirstPage.scss';
import { FetchRecipes } from './services/Service';

export default function FirstPage() {

    
    return (
        <div>
            <div id="Hero">
                <div id="Logger">
                    <h1>Welcome!</h1>     
                    <a id="Login" 
                    href="https://github.com/login/oauth/authorize?client_id=c292a6020ce35b214c2e">Log in here</a>

                </div>
            </div>

        </div>


    )
}
//4c805c43cd2ee42e802b