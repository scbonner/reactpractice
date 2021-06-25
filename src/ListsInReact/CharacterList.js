import * as React from 'react'

//create an array of objects 

const listing = [
  {
    objectID: 0,
    character: 'Bugs Bunny',
    sex: 'Male',
    type: 'Cartoon',
    genre: 'Comedy',
  },
  {
    objectID: 1,
    character: 'Rhett Butler',
    sex: 'Male',
    type: 'Film',
    genre: 'Drama',
  },
  {
    objectID: 2,
    character: 'Jackson Maine',
    sex: 'Male',
    type: 'Film',
    genre: 'Docu-Series',
  },
  {
    objectID: 3,
    character: 'Mildred Pierce',
    sex: 'Female',
    type: 'Film',
    genre: 'Drama',
  },
  {
    objectID: 4,
    character: 'Stephen',
    sex: 'Male',
    type: 'Film',
    genre: 'Slavery',
  },
];

export default function CharacterList() {


  return(
    <div>
      <h1>First Attempt At Mapping An Array</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
      <br />
      <br />
      <hr />
{/* setup of rendering of list items per array objects */}
      <ul>
        {listing.map(function(item) {
          return <li>{item.character}</li>;
        })}
        <hr />
        <ul>
          {listing.map(function(item) {
            return <li>{item.genre}</li>
          })}
          <hr />
            <ol>
            {listing.map(function(item) {
              return <li>{item.type}</li>
            })}
            <hr />
            <ul>
            {listing.map(function(item) {
              return <li>{item.sex}</li>
            })}
          </ul>
          </ol>
        </ul>
      </ul>


    </div>



  )
}

