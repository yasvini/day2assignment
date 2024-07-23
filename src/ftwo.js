import React from "react"
class Two extends React.Component{
    name="Reactjs";
    count=0;
    constructor(){
        super();
        this.state={
            number:1
        };
        console.log("constructor is called");
    }
    componentDidMount(){
        console.log("mounted");
        console.log(this.count);
        console.log(this.count+1);
    }
    componentWillUnmount(){
        console.log("will be unmounted");
    }

    render(){
        return (
            <div><h1>this is a component using classes</h1>
            <button class="btn btn-outline-primary">click here</button>
            </div>
        );
    }
    
}
export default Two;
