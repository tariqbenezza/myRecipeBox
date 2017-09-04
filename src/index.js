// React
import React from 'react';
import { render } from 'react-dom';
//Components
import App from './components/App';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound'
//Router
import { BrowserRouter, Match, Miss } from 'react-router';
//CSS
import './index.css';

const Root = () => {
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/myRecipeBox/" component={ Connexion } />
                <Match pattern="/myRecipeBox/box/:pseudo" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(
    <Root/>, document.getElementById('root')
);

