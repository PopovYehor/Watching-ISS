import React from "react";
import App from "./app";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import * as _ from 'lodash';
import {Provider} from "react-redux"
import store from "./store/store";

function Init() {


    return (
            <React.StrictMode>
                <Provider store={store}>
                        <Router>
                                <App/>
                        </Router>
                </Provider>
           </React.StrictMode>
    )
}

ReactDOM.render(<Init />, document.getElementById('root'));

