// Footer.js
import React from 'react'

let Footer = React.createClass({
  render: function() {
    return (
      <footer className="main-footer">
      <p className="main-footer__content">see more at:
        <span> </span>
        <a className="main-footer__link" href="https://matthewbenjamin.github.io">
          my portfolio</a>
      </p>
      </footer>
    )
  }
});

export { Footer }
