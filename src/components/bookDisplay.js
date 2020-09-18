import { connect } from 'react-redux'
import React from 'react';
import selectBook from './../actions/selectBookAction';

class BookDisplay extends React.Component {
    booksList() {
        return this.props.library.map((book, index) =>
            <h1 onClick={() => { this.props.selectBook(book.title); }} key={index}>{book.title}</h1>
        )
    }

    render() {
        let booksList = this.booksList();
        return (
            <div>
             <h1>example app</h1> <div>{booksList}</div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    library: state.library
});

const mapDispatchToProps = dispatch => ({
  selectBook: title => dispatch(selectBook(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDisplay);