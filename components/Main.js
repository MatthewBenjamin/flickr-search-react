// Main.js
import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

let Main = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
});

export { Main }
