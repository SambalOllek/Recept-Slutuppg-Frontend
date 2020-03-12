import React from 'react';
import './NewRec.scss';
import { AddRecipe } from './services/Service';

export default function NewRec(props) {
    function onLinkClick(id) {
        props.onNavigate(id);
    }

    

    function postres() {
        console.log(title, description, instructions)
        const compile = {
            "description": description,
            "id":0,
            "name": title,
            "tutorial": instructions
            }
            AddRecipe(compile);
    }


    const [IngredList, setIngredList] = React.useState([
        ""
    ]);

    const [title, settitle] = React.useState("")

    const [instructions, setinstructions] = React.useState("")

    const [description, setdescription] = React.useState("")


    function TitleChanged(ev) {
        settitle(ev.currentTarget.value)
    }

    function InstructionsChanged(ev) {
        setinstructions(ev.currentTarget.value)
    }

    function DescriptionChanged(ev) {
        setdescription(ev.currentTarget.value)
    }
    return (
        <div>
            <div id="Hero">
                <div id="Page">
                    <h1>Add your recipe!</h1>
                    <>
                        <div className="Rform">

                            <h3>Title</h3>
                            <input onChange={TitleChanged} value={title} className="Inputfield" type="text" placeholder="Title of recipe" />

                            <h3>
                                Ingredients
                            </h3>
                            <div className="IngredientsInputWrap">
                                {IngredList.map((value) => {
                                    return(<input type="text" className="IInput"
                                    placeholder="Enter an ingredient" />
                            )
                                    })}
                            </div>
                            <br />
                            <button id="add" onClick={AddI}>+</button>

                            <h3>
                                Instructions:
                            </h3>

                            <textarea onChange={InstructionsChanged} value={instructions} className="Instructions" rows="5" cols="60" placeholder="How is your dish made?" />
                            <br />
                            <h3>
                                Description
                            </h3>
                            <textarea onChange={DescriptionChanged} value={description} className="Description" rows="5" cols="60" placeholder="Tell us about your dish!" />
                            <br />
                            <input type="submit" id="Poster" value="Upload" onClick={postres}></input>

                        </div>
                    </>
                </div>
            </div>
            <body>

            </body>

        </div>


    )
    function AddI() {
        let newArray = [...IngredList];
        newArray.push("");
        setIngredList(newArray);
    }
}
