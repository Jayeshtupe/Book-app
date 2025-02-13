import useFetch from "../useFetch";

const BookByTitle = ({ title }) => {
    const { data, loading, error } = useFetch(`https://backend-users-jade.vercel.app/books/${title}`);

    // console.log(data);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error while getting data.</p>}

            {data && data.books ? (
                <div>
                    <h1>{data.books.title}</h1> 
                    <p><strong>Author:</strong> {data.books.author}</p>
                    <p><strong>Release Year:</strong> {data.books.publishedYear}</p> 
                    <p><strong>Genre:</strong> {data.books.genre.join(", ")}</p> 
                </div>
            ) : (
                <p>No book found.</p>
            )}
        </div>
    );
}

export default BookByTitle;
