import * as React from 'react';


//first exercise test
// Think about ways to display the
//  title variable in your App
//  component's returned HTML. In 
//  the next section, we'll put this 
//  variable to use.

//varible title is placed outside of component
//does not have rerending capabilites
const title = 'React';

export default function ReRenderTitle() {
  return (
    <>
    <div>
      <h1>Hello World</h1>
      <p>This is the first of the component exercises.</p>
      <p>Let's give it a try. {title}!</p>
      <p>We have been tasked to render {title} in 
      some form or fashion.</p>
    </div>

    <div>
      <p>Okay. Let us see if we can re-render {title} here as well.
      </p>
    </div>
    </>
  );
}


//display of code outcome

// Hello World
// This is the first of the component exercises.

// Let's give it a try. React!

// We have been tasked to render React in some form or fashion.

// Okay. Let us see if we can re-render React here as well.