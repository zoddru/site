import React from 'react';

export default class Content extends React.Component {
    constructor (props) {
        super(props);

        console.log(props);

        this.state = {
            title: props.title
        };
    }

    updateTitle (e) {
        const title = e.target.value;
        this.props.onTitleChanged(title);
        this.setState({ title });
    }

    render() {
        return (
            <section>
                <div>{this.state.title}</div>
                <input type="text" value={this.state.title} onChange={this.updateTitle.bind(this) } />
            </section>
        );
    }
}

