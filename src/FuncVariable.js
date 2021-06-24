// // Variables defined in the
// function's body will be re-defined
// each time this function runs, which
// shouldn't be something new if you are
// familiar with JavaScript
// and its functions:

import * as React from "react";

//first lined of the function's body
function App() {
  //design of varible assignment/value
  const title = "React";

  return (
    <div>
{/* calling variable assigned value, 'React'*/}
      <h1>Learning {title} Today!!!</h1>
      <h2>Good Morning!</h2>
      <p>What are your plans for today?</p>
      <p>The weather is supposed to be great!</p>
    </div>
  );
}

export default App

//SEE EXAMPLED OUTPUT BELOW

// Learning React Today!!!
// Good Morning!
// What are your plans for today?

// The weather is supposed to be great!