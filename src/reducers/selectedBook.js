export default function selectedBook(state = "", action) {
    if (action.type == 'book/selectBook') {
        return action.payload;
    }
    return state;
  }