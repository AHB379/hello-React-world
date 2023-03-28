import { useState } from "react";
import AppContext from "./AppContext";
import {useContext} from "react";

function FunctionalApp(props){
    const context = useContext(AppContext);
    const [myPerson, setMyPerson] = useState(search_myPerson());
    return(
        <>
        <h1>{myPerson.biography}</h1>
        <h2>age: {myPerson.age}</h2>
        <img src={myPerson.image}/>
        {props.children}
        <button onClick={()=>{context.increaseAge(myPerson.biography)}}></button>
        </>
    );

    function search_myPerson(){
        for(let index of context.person){
            if(index.biography === props.biography){
                return index;
            }
        }
    }
}

export default FunctionalApp;