// Main.js
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const PropTypes = React.PropTypes;

function Main(props) {
  return (
    <div>
      <Header />
      <main className="main-content">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Main };
