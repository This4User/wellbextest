import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Containers/Main/Main';
import {Provider} from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);
