import * as React from "react";

// Each item in the list has a title,
//  a url, an author, an identifier
//  (objectID), points -- which indicate
//   the popularity of an item -- and a
//   count of comments (num_comments).
//   Next, we'll render the list within
//   our JSX dynamically:

//api witn an array variable
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walker",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.or/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

export default function ArrLists() {
  return (
    
    <div>
      <h1>My Hacker Narratives</h1>
{/* setup of search box input */}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <br />
      <br />
      <hr />

{/* render list items from array here */}
    
    <ol>
        {list.map(function (item) {
          return <li>{item.author}</li>;
        })}
        <ul>
        {list.map(function (item) {
          return <li>{item.title}</li>;
        })}
        <ul>
        {list.map(function (item) {
          return <li>{item.num_comments}</li>;
        })}
        </ul>
        </ul>
          
    </ol>

      
      
    </div>
  
  );
}
        

     
