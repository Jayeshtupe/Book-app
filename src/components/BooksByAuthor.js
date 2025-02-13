import useFetch from "../useFetch"

const BooksByAuthor = ({author}) => {
    const { data, loading, error } = useFetch(`https://backend-users-jade.vercel.app/books/author/${author}`)
    // console.log(data)

    return (
        <div>
            <h1>Books by Harper Lee</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error in fetching the books</p>}

            <ul>
                {data.book.map(book => (
                    <li key={book._id}>{book.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default BooksByAuthor