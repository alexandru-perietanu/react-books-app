export default function library(state, action) {
    // first reducer call for init state
    if (state == undefined) {
        return [
            {
                title: "book1",
                author: "author1"
            },
            {
                title: "book2",
                author: "author2"
            },
            {
                title: "book3",
                author: "author3"
            },
            {
                title: "book4",
                author: "author4"
            },
            {
                title: "book5",
                author: "author5"
            }
        ];
    }

    // specific actions
    if (action.type == "book/createNewBook") {
        return [...state, {
            title: action.payload.title,
            author: action.payload.author,
        }];
    }

    // implcit reducer call
    return state;

}