import React, { Component } from 'react';
import ThemeContext from "../../Context/context"
class ChildB extends Component {

    render() {
        console.log(this.context.age);
        return (
            <div>
                <ThemeContext.Consumer>
                {(context) => <button onClick={context.inc}>INC</button>}
                </ThemeContext.Consumer>
                ChildB : {this.context.age}
            </div>
        );
    }
}
ChildB.contextType = ThemeContext;
export default ChildB;
