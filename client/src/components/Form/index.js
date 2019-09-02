import React from "react";

function Form({ children }) {
  return (
    <div className="overflow-auto">
      <form className="mx-4">
        <div className="form-group">
          <label for="book-search">Book Title</label>
          <input type="email" className="form-control" id="book-search" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        {children}
      </form>
    </div>
  )
}

export default Form;