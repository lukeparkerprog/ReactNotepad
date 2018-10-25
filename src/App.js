import React, { Component } from 'react';
import './App.css';
import { setLocalItem, getLocalItem, removeLocalItem, keys } from './services/storage'
import Header from './components/header';
import Routes from './components/routes';
import { withRouter } from 'react-router-dom';

const key = keys.notes;

class App extends Component {
    constructor(props) {
        super(props);
        console.log("Written by Luke Parker");

        this.state = {
            list: [],
            activeIndex: -1
        }
    }

    componentDidMount() {
        let list = getLocalItem(key);
        if (list) {
            this.setState({ list });
        }
    }

    clearAll = function () {
        removeLocalItem(keys.notes);
        setLocalItem(key, []);
        this.setState({ list: []});
        this.forceUpdate();
        this.props.history.push('/');
    }

    removeNote(index) {
        let list = this.state.list;
        list.splice(index, 1);
        setLocalItem(key, list);
        this.setState({ list });
    }

    onAdd(title, content) {
        let list = this.state.list;
        list.push({
            title,
            content
        });
        setLocalItem(key, list);
        this.setState({ list });
    }

    onEdit(title, content, index) {
        let list = this.state.list;
        list[index] = {
            title,
            content
        };
        setLocalItem(key, list);
        this.setState({ list });
    }

    resetIndex() {
        this.setState({
            activeIndex: -1
        });
    }

    goAdd() {
        this.props.history.push('/addNote')
    }

    goEdit(index) {
        this.setState({
            activeIndex: index
        })
        this.props.history.push('/editNote')
    }

    goHome() {
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="app">
                <Header
                    clearAll={this.clearAll.bind(this)}
                />
                <div className="content">
                    <Routes
                        removeNote={this.removeNote.bind(this)}
                        onAdd={this.onAdd.bind(this)}
                        onEdit={this.onEdit.bind(this)}
                        activeIndex={this.state.activeIndex}
                        list={this.state.list}
                        goAdd={this.goAdd.bind(this)}
                        goEdit={this.goEdit.bind(this)}
                        goHome={this.goHome.bind(this)}
                        resetIndex={this.resetIndex.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(App);
