import React, { Component } from 'react';
import ChildA from "./Child/ChildA";
import ThemeContext  from "../Context/context"
import AppProvider from "./AppProvider"
class Parent extends Component {

    render() {
        console.log(this.context);
        return (
            <AppProvider>
                <div>
                    <ThemeContext.Consumer>
                        {(context) => context.age}
                    </ThemeContext.Consumer>
                    <ChildA />
                </div>
            </AppProvider>

        );
    }
}

export default Parent;
