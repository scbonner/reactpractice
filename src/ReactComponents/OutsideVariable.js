// The function of a function component
//  will either run when a component is
//   rendered for the first time or
//   re-rendered when it updates.
//   The act of rendering means that
//   the component displays itself
//   in the browser. Since we don't
//   need anything from within the App
//   component that will be used to
//   define this variable from the
//   last code snippet -- for example
//   parameters coming from the component's
//   function signature -- we can define
//   the variable outside of the App
//   component as well. Thus it will
//   be defined only once and not every
//    time the function is called:

import * as React from "react";

//define variable outside function component
const title = "React";

export default function OutsideVariable() {
  //when variable is define outside of scope,
  //setup return/rending JSX

  return (
    <div>
      <h1>Testing of Outside Variable</h1>
      <p>Very interested in how this will work.</p>
      <p>Let us see if outside variable can be retrieved below:</p>
      <p>Currently, we are studying {title}.</p>
      <p>It works!</p>
    </div>
  );
}

//Displayed OUTCOME OF CODE ABOVE

// Testing of Outside Variable
// Very interested in how this will work.

// Let us see if outside variable can be retrieved below:

// Currently, we are studying React.

// It works!

// ***As a rule of thumb: If a variable does not 
// need anything from within the function component's 
// body (e.g. parameters), then define it outside of 
// the component which avoids redefining it on every function call.