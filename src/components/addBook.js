import { connect } from 'react-redux'
import React from 'react';
import createNewBook from './../actions/createNewBook';


class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: ""
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Book Title:</label>
                <input id="title" 
                    value={this.state.title} 
                    onChange={this.handleTitleChange}>                    
                </input>
                <label htmlFor="author">Book Author:</label>
                <input id="author" 
                    value={this.state.author}
                    onChange={this.handleAuthorChange}>
                </input>
                <input type="submit" value="Submit" />
            </form>
        );
    };

    handleTitleChange(event) {
        this.setState({
            title: event.target.value//,
            //author: this.state.author
        });
    }

    handleAuthorChange(event) {
        this.setState({
            //title: event.target.value//,
            author: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createNewBook(Object.assign({}, this.state));
    }
}

const mapDispatchToProps = dispatch => ({
  createNewBook: bookData => dispatch(createNewBook(bookData))
});

export default connect(() => ({}), mapDispatchToProps)(AddBook);