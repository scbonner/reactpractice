import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: 'Array',
    url:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
    author: 'MDN',
    num_comments: 6,
    points: 4,
    objectID: 2
  },
  {
    title: 'Ruby Guide',
    url: 'https://www.rubyguides.com/2019/10/ruby-chomp-gets/',
    author: 'Jesus Castello',
    num_comments: 5,
    points: 7,
    objectID: 3
  }
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
      <br />
      <hr />

      <List />

      <br />
    </div>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input className="name" type="text" required />
      <br />
      <br />
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>

            <br />
            <ol>
              <label htmlFor="author">Author: </label>
              <span>{item.author}</span>
              <br />
              <label htmlFor="num_comments">Comments: </label>
              <span>{item.num_comments}</span>
              <br />
              <label htmlFor="points">Points: </label>
              <span>{item.points}</span>
              <br />
              <h4>Place your comments in the box below:</h4>
              <textarea
                id="comment"
                name="box"
                rows="5"
                cols="33"
              ></textarea>
            </ol>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
