import React, { Component } from 'react';
import ThemeContext from "../Context/context"
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "thuc",
            age: 12,
            inc: () => {
                this.setState({age: this.state.age + 1})
              }
        }

    }

    render() {
        return <ThemeContext.Provider value={this.state}>
            {this.props.children}
        </ThemeContext.Provider>
    }
}

