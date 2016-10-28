// Main.js
import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

let Main = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <main className="main-content">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
});

export { Main }
