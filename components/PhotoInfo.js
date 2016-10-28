// PhotoInfo.js
import React from 'react'

let PhotoInfo = (props) => {
  // TODO: add <img> alt-text
  return (
    <li className='results-list__item'>
      <img className='results-list__item__img' src={props.imgURL} />
    </li>
  )
}

export { PhotoInfo }
