import * React from 'react'



//javascript class is used for defining a react component
class Developer {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName() {
        return this.firstname +  ' ' + this.lastname;

    }
)

class ReactDeveloper extends Developer {
    getJob() {
        return 'React Developer';
    }
}
let me = new ReactDeveloper('Robin', 'Wierch');
console.log(me.getName());
console.log(me.getJob());