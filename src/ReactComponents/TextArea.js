import * as React from 'react';
import '../styles.css'


//executing function getTitle

function getTitle(title) {
  return title;
}

export default function TextArea() {
  return (
    <div>
{/* rendering title prop and naming it  */}
      <h1>Hello there, {getTitle('React is the bomb!')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" /><br />
      <br />
      <label htmlFor='firstName'>First Name: </label>
      <input id='firstName' type='text' /><br />
      <br />
      <label htmlFor='lastName'>Last Name: </label>
      <input id='lastName' type='text' /><br />
      <br />
      <label htmlFor='comment'>Share Your Comments Below:</label>
      <br />
{/* adding area for text input */}
      <textarea id='comment' name='comment' rows='5' cols='33'>
      The time is now.
      </textarea>
    </div>
  );
}
