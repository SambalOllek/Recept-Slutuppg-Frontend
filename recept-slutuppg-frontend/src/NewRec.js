import React from 'react';
import './NewRec.scss';

export default function NewRec(props) {
    function onLinkClick(id) {
        props.onNavigate(id);
    }

    const [nut, setNut] = React.useState([
        <input type="text" className="IInput"
            placeholder="Enter an ingredient" />
    ]);


    return (
        <div>
            <div id="Hero">
                <div id="Page">
                    <h1>Add your recipe!</h1>
                    <>
                        <div className="Rform">

                            <h3>Title</h3>
                            <input className="Inputfield" type="text" placeholder="Title of recipe" />
                            
                            <h3>
                                Ingredients
                            </h3>
                            <div className="IngredientsInputWrap">
                                {nut}
                            </div>
                            <br />
                            <button id="add" onClick={AddI}>+</button>

                            <h3>
                                Instructions:
                            </h3>

                            <textarea className="Instructions" rows="5" cols="60" placeholder="How is your dish made?" />
                            <br />
                            <h3>
                                Description
                            </h3>
                            <textarea className="Description" rows="5" cols="60" placeholder="Tell us about your dish!" />
                            <br />
                            <input type="submit" id="Poster" value="Upload" />

                        </div>
                    </>
                </div>
            </div>
            <body>

            </body>

        </div>


    )
    function AddI() {
        let newArray = [...nut];
        newArray.push(<><br /><input type="text" className="IInput"
            placeholder="Enter an ingredient" /></>);
        setNut(newArray);
    }
}
