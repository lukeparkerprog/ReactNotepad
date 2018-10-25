import React, { Component } from 'react';
import { setSessionItem, getSessionItem, removeSessionItem, keys } from '../services/storage'

class AddNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title:'',
            content: ''
        }
    }

    componentDidMount() {
        let formData = getSessionItem(keys.formData);
        if (formData) {
            this.setState({ title: formData.title, content: formData.content });
        }
    }

    storeFormData() {
        let formData = {
            title: this.state.title,
            content: this.state.content
        }
        setSessionItem(keys.formData, formData)
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        }, () => { this.storeFormData() })
        
    }

    onContentChange(event) {
        this.setState({
            content: event.target.value
        }, () => { this.storeFormData() })
    }

    onSubmit() {
        this.props.onAdd(this.state.title, this.state.content)
        this.props.goHome();
        removeSessionItem(keys.formData);
    }

    render() {
        return (
            <div className="AddNote">
                <h3>Add Note</h3>
                    <div className="NoteField">
                        <input
                            id="title"
                            value={this.state.title}
                            onChange={this.onTitleChange.bind(this)}
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div className="NoteField">
                        <textarea
                            id="content"
                            value={this.state.content}
                            onChange={this.onContentChange.bind(this)}
                            placeholder="Content"
                            form="addNoteForm"
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

export default AddNote;
