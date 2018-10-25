import React, { Component } from 'react';
import Row from './row';

class Home extends Component {
    renderList() {
        var arr = [];
        this.props.list.forEach((item, i) => {
            arr.push(<Row
                title={item.title}
                content={item.content}
                index={i}
                removeNote={this.props.removeNote.bind(this)}
                editNote={this.props.goEdit.bind(this)}
            />);
        });
        return arr;
    }
    render() {
        return (
            <div className="body">
                <table className="notes">
                    <tbody>{this.renderList()}</tbody>
                </table>
                <div className="addButton">
                    <button onClick={() => this.props.goAdd()}>New Note</button>
                </div>
                
            </div>
        );
    }
}

export default Home;
