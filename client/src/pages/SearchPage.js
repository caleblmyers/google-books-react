import React, { Component } from "react"
import API from "../utils/API"
import SearchInput from "../components/SearchInput"
import FormBtn from "../components/FormBtn"
import { List, ListItem } from "../components/List"

class SearchPage extends Component {
  state = {
    search: "",
    books: []
  }

  searchBooks = event => {
    const { search } = this.state
    event.preventDefault()
    API.getBooks(search)
      .then(res => {
        let newBooks = []

        res.data.items.forEach(book => {
          let newBook = {}

          newBook._id = book.id
          newBook.title = book.volumeInfo.title
          newBook.authors = book.volumeInfo.authors
          newBook.description = book.volumeInfo.description
          newBook.image = book.volumeInfo.imageLinks.smallThumbnail
          newBook.link = book.volumeInfo.previewLink

          newBooks.push(newBook)
        })
        console.log(newBooks)
        this.setState({
          books: newBooks
        })
      })
      .catch(err => console.log(err))
  }

  addFavorite = event => {
    const { books } = this.state
    let bookData

    for (let i = 0; i < books.length; i++) {
      if (books[i]._id === event.target.id) {
        bookData = books[i]
      }
    }

    API.saveBook(bookData)
      .then(res => {
        console.log(res.config.data)
      })
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const name = event.target.name
    let value = event.target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    const { search, books } = this.state

    return (
      <div>
        <form className="mx-4 overflow-auto">
          <div className="form-group">
            <label>Book Title</label>
          </div>
          <SearchInput value={search} name="search" onChange={this.handleInputChange} />
          <FormBtn onClick={this.searchBooks}>Search</FormBtn>
        </form>
        {books.length ? (
          <div>
            {books.map(book => (
              <List key={book._id}>
                <ListItem>
                  <h4>{book.title}</h4>
                  {book.authors.map(author => (
                    <h5 key={author}>{author}</h5>
                  ))}
                  <p>{book.description}</p>
                  <img src={book.image} alt={book.title} className="d-block img-fluid" />
                  <button onClick={this.addFavorite} id={book._id} className="btn btn-success">Add to Favorites</button>
                  <a href={book.link}><button className="btn btn-info">Go to Book Page</button></a>
                </ListItem>
              </List>
            ))}
          </div>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    )
  }
}

export default SearchPage