import React, {Component} from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <button>Add</button>
          <span>Name</span><br />
      </div>
    );
  }
}

export default App;
