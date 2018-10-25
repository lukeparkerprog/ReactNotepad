import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import AddNote from './addNote';
import EditNote from './editNote';

const Routes = function (props) {
    return (
        <Switch>
            <Route path="/" exact render={() => <Home list={props.list} removeNote={props.removeNote} resetIndex={props.resetIndex} goAdd={props.goAdd} goEdit={props.goEdit} />} />
            <Route path="/addNote" exact render={() => <AddNote onAdd={props.onAdd} updateIndex={props.updateIndex} goHome={props.goHome} />} />
            <Route path="/editNote" exact render={() => <EditNote onEdit={props.onEdit} activeIndex={props.activeIndex} goHome={props.goHome} list={props.list}/>} />
        </Switch>
    );
}

export default Routes;
