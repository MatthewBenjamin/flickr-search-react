// SearchForm.js
import React from 'react'

let SearchForm = (props) => {
    return (
      <form className="search-form" onSubmit={props.onSubmitQuery}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Search Flickr"
          value={props.query}
          onChange={props.onUpdateQuery} />
        <button className="search-form__btn" type="submit">Search</button>
      </form>
    )
}

export { SearchForm }
