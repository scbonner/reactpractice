import React from 'react';


function practice() {

//jsx varible declaration
const element = <h1>Hello, world!</h1>

const element = <h1>Hello, world!</h1>

const element = <h1>Hello, world!</h1>

const element = <h1>Hello, world!</h1>
const element = <h1>Hello, world!</h1>

//embedding expressions in jsx

//declaring a varible called name
const name = 'Tori Patterson';
//now we will use jsx and wrap varible identiier in curly braces
conse element = <h1>Hello, {name}</h1>;

}


//calling js function into an <h1> element
function formatName(user) {
    return user.firstName + " " + lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'

};

const element = (
    <h1>Hello, {formatName(user)}!
    </h1>
);


export default practice