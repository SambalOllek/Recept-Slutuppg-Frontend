import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Recipes from './Recipes';
import NewRecipes from './NewRec';
import Categories from './Categories';
import FirstPage from './FirstPage';


class App extends Component {
  render() {
//     const PageSwitchToRecipe = () => {
//       setRenderedComponent(
//         <Categories switchScene={PageSwitchToRecipe} />
//       );
// const [setRenderedComponent] = userState(
//   <Categories switchScene={PageSwitchToRecipe}
// )
//     }

    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={FirstPage} exact/>
             <Route path="/Categories" component={Categories}/>
             <Route path="/Recipes" component={Recipes}/>
             <Route path="/NewRec" component={NewRecipes}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
