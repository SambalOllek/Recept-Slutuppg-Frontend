import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FirstPage from './FirstPage.js';
import NewRec from './NewRec.js';
import Categories from './Categories.js';
import Recipes from './Recipes.js';


ReactDOM.render(<Recipes/>, document.getElementById('root'));
