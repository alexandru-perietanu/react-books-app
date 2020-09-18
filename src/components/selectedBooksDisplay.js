import { connect } from 'react-redux'
import React from 'react';

class SelectedBookDisplay extends React.Component {
    render() {
        return (
             <div>{this.props.selectedBook}</div>
        );
    };
}

const mapStateToProps = state => ({
    selectedBook: state.selectedBook
})

export default connect(mapStateToProps)(SelectedBookDisplay);