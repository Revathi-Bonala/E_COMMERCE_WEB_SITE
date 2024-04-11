import React, { Component } from "react";
class Welcome extends Component{
    constructor() {
      super()
    
      this.state = {
         messege:'welcome'
      }
    }
    changeMessege (){
        
        this.setState({
            messege:'thank you'
        })
    }
    
    render(){
        return (<div>
            <h1>{this.state.messege}</h1>
           <button onClick ={() => this.changeMessege()}> Click </button>
           {/* <button onClick={this.state.changeMessege}>Subscribe</button> */}

           </div>)
    }
}
export default Welcome