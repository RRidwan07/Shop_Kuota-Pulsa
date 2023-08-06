import React, {Component} from "react";

className CompHook extends Component {
    state = {
        counter: 0
      } 
    AddPoint = () => {
        this.setState({counter: 10})
    }
    render() { 
        return (
            <div>component className</div>
        );
    }
}
 
export default CompHook;