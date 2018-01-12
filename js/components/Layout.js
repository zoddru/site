import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = { title: 'page title' };
    }

    updateTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            [
                <Header key="main.header" title={this.state.title} />,
                <Content key="main.content" title={this.state.title} onTitleChanged={this.updateTitle.bind(this)} />,
                <Footer key="main.footer" />
            ]
        );
    }
}

