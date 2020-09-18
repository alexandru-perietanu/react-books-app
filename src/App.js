import React from 'react';
import BookDisplay from './components/bookDisplay';
import SelectedBookDisplay from './components/selectedBooksDisplay';
import AddBook  from './components/addBook';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <BookDisplay></BookDisplay>
                <SelectedBookDisplay></SelectedBookDisplay>
                <AddBook></AddBook>
            </div>
        );
    };
}