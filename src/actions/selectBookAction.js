let selectBook = title => {
    console.log("action called", title);
    return {
        type: 'book/selectBook',
        payload: title
    }
};
export default selectBook; 