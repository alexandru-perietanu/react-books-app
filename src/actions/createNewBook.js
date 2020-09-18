let createnewBook = bookData => {
    return {
        type: 'book/createNewBook',
        payload: bookData
    }
};
export default createnewBook; 