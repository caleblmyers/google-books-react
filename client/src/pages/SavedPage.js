import React, { Component } from "react"
import API from "../utils/API"
import { List, ListItem } from "../components/List"

class SavedPage extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    this.loadFavorites()
  }

  loadFavorites = () => {
    API.getFavorites()
      .then(res => {
        this.setState({
          books: res.data
        })
        console.log(this.state.books)
      })
      .catch(err => console.log(err))
  }

  deleteBook = event => {
    console.log(event.target.id)
    API.deleteBook(event.target.id)
      .then(res => {
        console.log("Books left: ", res)
        this.loadFavorites()
      })
  }

  render() {
    return (
      <div>
        {this.state.books.length ? (
          <div>
            {this.state.books.map(book => (
              <List key={book._id}>
                <ListItem>
                  <h4>{book.title}</h4>
                  {book.authors.map(author => (
                    <h5 key={author}>{author}</h5>
                  ))}
                  <p>{book.description}</p>
                  <img src={book.image} alt={book.title} className="d-block img-fluid" />
                  <a href={book.link}><button className="btn btn-info">Go to Book Page</button></a>
                  <button onClick={this.deleteBook} id={book._id} className="btn btn-danger">Remove Book</button>
                </ListItem>
              </List>
            ))}
          </div>
        ) : (
            <h3>No Favorites Saved</h3>
          )}
      </div>
    )
  }
}

export default SavedPage