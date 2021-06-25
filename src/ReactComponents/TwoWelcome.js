// For our input field and label combination,
// we specified three HTML attributes: htmlFor,
// id, and type. Where id and type should be
// familiar from native HTML, htmlFor might be
// new to you. The htmlFor reflects the for attribute
// in HTML. JSX replaces a handful of internal HTML
// attributes caused by internal implementation
// details of React itself. However, you can find all
// the supported HTML attributes in React's documentation,
// which follows the camel case naming convention.
// Expect to come across more JSX-specific attributes
// like className and onClick instead of class and
// onclick, as you learn more about React.

// We will revisit the HTML input field for implementation
// details later; for now, let's return to JavaScript in
// JSX in contrast to HTML. We have defined a JavaScript
// string primitive to be displayed in the App component,
//  the same can be done with a JavaScript object:

import * as React from "react";

const welcome = {
  greeting: "Hi",
  title: "Rex"
};

export default function TwoWelcome() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      {/* <textarea type='text'>Enter Comments:</textarea> */}
    </div>
  );
  }

  //Search has an input box 

 //Hi Rex
 //Search: 
