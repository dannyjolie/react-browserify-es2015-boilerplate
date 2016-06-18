import React, { PropTypes, Component } from 'react';

export default class HelloWorld extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            counter: 0
        };
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        const { foo, bar } = this.props;
        return (
            <div>
                <ul>
                    <li>First prop "foo": {foo}</li>
                    <li>Second prop "bar": {bar}</li>
                    <li>Counter: {this.state.counter}</li>
                </ul>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

HelloWorld.propTypes = {
    foo: PropTypes.string.isRequired,
    bar: PropTypes.string.isRequired
};