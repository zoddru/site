import React from 'react';

export default class Header extends React.Component {
    constructor () {
        super();
        
        this.state = {
            time: new Date()
        };

        setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    render() {
        return (
            <header>
                <h1>{ this.props.title }</h1>
                <h2>{ this.state.time.toString() }</h2>
            </header>
        );
    }
}

