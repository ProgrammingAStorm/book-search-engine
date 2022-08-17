export const GET_ME = gql`
    _id
    username
    email
    bookCount
    savedBooks {
        authors
        description
        bookId
        image
        link
        title
    }
`;