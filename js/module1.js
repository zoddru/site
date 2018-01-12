import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    render () {
        return (
            <h1>it works! tes t</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);


// https://www.youtube.com/watch?v=MhkGQAoc7bc

// webpack-dev-server --content-base docs
// webpack-dev-server --content-base docs --inline --hot

