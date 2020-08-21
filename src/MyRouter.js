import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import DetailPage from './components/DetailPage';

class MyRouter extends React.Component {
    render() {
        return (
            <div className="MyRouter">
                <Switch>
                    <Route path='/detail_page/:pokemonId' component={DetailPage}/>
                    <Route path='/detail_page' render={() => <p>Enter pokemon id at the end of the URL to read its details.</p>}/>
                    <Route exact path='/' component={App}/>
                </Switch>
            </div>
        )
    }
}

export default MyRouter;
