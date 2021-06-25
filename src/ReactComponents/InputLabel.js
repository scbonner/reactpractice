import * as React from "react";

//Now let's focus on the
// HTML which differs slightly
// in JSX. An HTML input field with
// a label can be defined as follows:

const title = "React is here!";

export default function InputLabel() {
  return (
    <div>
      <h1>Hello, Sadric. {title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}



//Search has an input box for text input
// Hello, Sadric. React is here!
// Search: 
