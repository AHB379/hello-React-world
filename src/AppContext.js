import { createContext } from "react";

const AppContext = createContext({
    person : [],
    deletePerson : ()=>{},
    increaseAge : ()=>{}
});

export default AppContext;