import React from 'react';
import ReactDOM from 'react-dom';
import Banner from "./Banner";

export const mount = (el) => {
    ReactDOM.render(<Banner/>, el);
}

const devRoot = document.querySelector('#banner-root');

if (devRoot) {
    mount(devRoot);
}