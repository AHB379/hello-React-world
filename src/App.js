import { Component } from "react";
import AppContext from "./AppContext";
import ClassbaseApp from "./ClassbaseApp";
import FunctionalApp from "./FunctionalApp";
import './mycss.css';

class App extends Component{
    state = {
        person: [
            { biography: "Amirhossein Barzegari", image: "https://picsum.photos/200", age: 27 },
            { biography: "Hossein Zarrin", image: "https://picsum.photos/300", age: 28 },
            { biography: "Omid Ahangar", image: "https://picsum.photos/400", age: 24 }
        ]
    };
    render(){
        return(
            <>
                <AppContext.Provider
                    value={{
                        person: this.state.person,
                        deletePerson: this.deletePerson,
                        increaseAge: this.increaseAge
                    }}
                >
                    <button onClick={this.resetAges}>Reset</button>
                    {this.state.person.map((value,index)=>(
                        <FunctionalApp biography={value.biography}>
                            <p>
                                سلام. من اومدم!
                            </p>
                        </FunctionalApp>
                    ))}
                </AppContext.Provider>
            </>
        )
    };

    deletePerson = (biography)=>{
        const newsPerson = this.state.person.filter(v => v.biography !== biography);
        this.setState({person: newsPerson});
    };
    increaseAge = (biography)=>{
        const newsPerson = this.state.person.map(p=>{
            if(p.biography === biography){
                p.age += 1;
            }
            return p;
        });
        this.setState({person: newsPerson});
    }
    resetAges = ()=>{
        const newsPerson = this.state.person.map((p)=>{
            p.age = 0;
            return p;
        });
        this.setState({person: newsPerson});
    };
}

export default App;