

// JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

function getGreetings(user) {
    if (user)
        return <h1>Hello, {formatName(user)}!</h1>;

    }
    return <h1>Hello, Stranger.</h1>
}

//conditional if statement

function getGreetings(user) {
    if (user) 

        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}       

function getGreetings(user) {
    if (user)
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>;

}

function getGreetings(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>,
    }
    return <h1>Hello, Stranger</h1>,
}




const element = <h1>Hello, Harry!</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);