import React from "react"

function SearchInput(props) {
  return (
    <input {...props} type="text" className="form-control mb-2" id="search-input" placeholder="Enter a book title" />
  )
}

export default SearchInput