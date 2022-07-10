import { useState } from "react";

function FunctionalApp(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Amirhossein");
    return(
        <>
        <h1>{name} {count}</h1>
        <button onClick={increase} style={{background : 'green'}}>+</button>
        <button onClick={decrease} style={{background : 'red'}}>-</button>
        <button onClick={() =>{resetName(name,setName)}} style={{background : 'yellow'}}>reset Name</button>
        </>
    );

    function increase(){
        setCount(count + 1);
    };
    function decrease(){
        setCount(count - 1);
    };
}

function resetName(name, setName){
    if(name == "Amirhossein")
        setName("Barzegari");
    else
        setName("Amirhossein");
};

export default FunctionalApp;