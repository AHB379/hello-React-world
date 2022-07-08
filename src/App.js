import { Component } from "react";
import './mycss.css';

class App extends Component{
    state = {
        biograhpy : "Amirhossein Barzegari",
        imageURL : "https://picsum.photos/200",
        number : 0
    };
    render(){
        return(
            <>
            <h1 dir="rtl" className="salam" id="slm">
                {this.state.biograhpy}
            </h1>
            <div>{this.state.number}</div>
            <img src={this.state.imageURL} alt="myPicture" style={{borderRadius: '50%', opacity: '0.5'}}/>
            <button onClick={this.func}>click</button>
            </>
        )
    };

    func = ()=>{
        this.setState({number: this.state.number + 1});
    };
}

export default App;