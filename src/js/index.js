import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

const helloProps = {
    foo: 'Foo!',
    bar: 'Bar!'
};

ReactDOM.render(<HelloWorld {...helloProps} />, document.querySelector('#app'));
