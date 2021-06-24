import React from "react";
import "./styles.css";

//Attempting to refactor class toggle
//on/off component button
//into a function component

//1. change class component into a function component
//2. convert all methods into functions
//3. delete render method
//4. remove constructor method section
//including this.state, key, object areas
//5. remove event handlers bindings

export default function ToggleFunc() {
  // return <h1>you clicked the button!</h1>

  //for some reason console.log not working
   //may be the beginning of my problem
  const newFunction = () => {
    console.log("click button");
  };
  //onClick even handler for on/off switch
  const onClickHandler = (e) => {
    newFunction();
  };

  return (
    <div>
      <h1>You clicked the button. Yay!</h1>
      <button onClick={onClickHandler}>{ToggleFunc ? "ON" : "OFF"}</button>
    </div>
  );
}
