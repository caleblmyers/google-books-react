import React, { Component } from "react"
import API from "../utils/API"
import { List, ListItem } from "../components/List"

class SavedPage extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/books")
      .then(data => console.log(data))
  }

  loadFavorites = () => {
    API.getFavorites()
      .then(res => {
        this.setState({
          books: res
        })
        console.log(this.state.books)
        console.log("books loaded")
      })
      .catch(err => console.log(err))
  }

  removeBook = event => {
    console.log(event.target.id)
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
                  <button onClick={this.removeBook} id={book._id} className="btn btn-danger">Remove Book</button>
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