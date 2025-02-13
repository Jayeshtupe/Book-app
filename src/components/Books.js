import { useState } from "react"
import useFetch from "../useFetch"
const Books = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const { data, loading, error } = useFetch("https://backend-users-jade.vercel.app/books")
    // console.log(data)

    const handleDelete = async (bookId) => {
        try{
            const response = await fetch(`https://backend-users-jade.vercel.app/books/deleteBook/${bookId}`, 
                {
                    method: "DELETE",
                }   
            )

            if(!response.ok){
                throw "Failed to delete movie."
            }

            const data = await response.json()

            if (data){
                setSuccessMessage("Movie deleted successfully.")
                window.location.reload()
            }

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h1>All Books</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error in fetching books.</p>}
            <ul>
           {data?.map(book => (
                <li key={book._id}>{book.title} <button onClick={() => handleDelete(book._id)}>Delete</button></li>
           ))}
           </ul>
           <p>{successMessage}</p>
        </div>
    )
}

export default Books