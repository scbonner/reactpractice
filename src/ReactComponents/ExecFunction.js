//Essentially everything in curly 
// braces in JSX can be used for JavaScript. 
// For example, executing a function
// works this way too:

import * as React from 'react'

//Essentially everything in curly 
// braces in JSX can be used for JavaScript. 
// For example, executing a function works 
// this way too:

//1. function execution, only one property, title
//listed in the getTitle function

function getTitle(title) {
  return title;
}

export default function ExecFunc() {
  return (
    <div>
{/* 2. Rendering, calling property with now
becomes the argument 'React' */}
      <h1>Hello, {getTitle("React on it's way!")}</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
    </div>
    

  )
}


//display of input field does not show here
// Hello, React on it's way!
// Search: 
