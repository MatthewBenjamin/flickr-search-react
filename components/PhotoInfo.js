// PhotoInfo.js
import React from 'react'

let PhotoInfo = (props) => {
  // TODO: add <img> alt-text
  return (
    <li>
      <img src={props.imgURL} />
    </li>
  )
}

export { PhotoInfo }
