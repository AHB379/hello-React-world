import { Component } from "react";
import AppContext from "./AppContext";

class ClassbaseApp extends Component {
    static contextType = AppContext;
    state = {
        myPerson : {}
    };
    render() {
        return (
            <>
            {this.search_myPerson()}
            <h1>{this.state.myPerson.biography}</h1>
            <h2>age: {this.state.myPerson.age}</h2>
            <img src={this.state.myPerson.image}/>
            {this.props.children}
            <button onClick={()=>{this.context.increaseAge(this.state.myPerson.biography)}}></button>
            </>
        );
    }

    search_myPerson = ()=>{
        for(let index of this.context.person){
            if(index.biography === this.props.biography){
                this.state.myPerson = index;
                break;
            }
        }
    }
}

export default ClassbaseApp;