import React, { Component } from "react";

import Form from "../components/Form"
import FormBtn from "../components/FormBtn"
import Results from "../components/Results"

class SearchPage extends Component {
  state = {
    books: []
  }
  
  render() {
    return (
      <div>
        <Form>
          <FormBtn>Search</FormBtn>
        </Form>
        <Results books={this.state.books}/>
      </div>
    )
  }
}

export default SearchPage