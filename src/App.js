import "bootstrap/dist/css/bootstrap.min.css"
import Books from "./components/Books"
import BookByTitle from "./components/BookByTitle"
import BooksByAuthor from "./components/BooksByAuthor"
import AddBookForm from "./components/AddBookForm"


export default function App(){
  return (
      <main className="container">
      <AddBookForm/>
      <Books />
      <BookByTitle title="Shoe Dog"/>
      <BooksByAuthor author="Harper Lee"/>
      </main>
  )
}