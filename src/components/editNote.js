import React, { Component } from 'react';

class EditNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }
    }

    componentDidMount() {
        let item = this.props.list[this.props.activeIndex];

        if (item) {
            this.setState({
                title: item.title,
                content: item.content
            })
        }
        else {
            this.props.goHome();
        }
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    onContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    

    onSubmit() {
        this.props.onEdit(this.state.title, this.state.content, this.props.activeIndex);
        this.props.goHome();
    }

    render() {
        return (
            <div className="EditNote">
                <h3>Edit Note</h3>
                <div className="NoteField">
                    <input
                        id="title"
                        value={this.state.title}
                        onChange={this.onTitleChange.bind(this)}
                        required
                    />
                </div>
                <div className="NoteField">
                    <textarea
                        id="content"
                        value={this.state.content}
                        onChange={this.onContentChange.bind(this)}
                        form="editNoteForm"
                    />
                </div>
                <div className="NoteButton">
                    <button onClick={this.onSubmit.bind(this)}>Save Note</button>
                    <button onClick={this.props.goHome.bind(this)}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default EditNote;
