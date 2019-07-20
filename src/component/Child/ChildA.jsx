import React, { Component } from 'react';
import ChildB from "./ChildB";
import ThemeContext from "../../Context/context"
class ChildA extends Component {

    render() {
        console.log(this.context);
        return (
              <div className="red">
                ChildA
                name: 
                <ChildB />
            </div>
        );
    }
}
ChildA.contextType = ThemeContext;
export default ChildA;
