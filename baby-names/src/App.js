import React, { Component } from 'react';
import NamesList from './components/NamesList'
import Credit from './components/Credit'
// import Search from './components/Search';
// import ShortList from './components/ShortList';
// import NamesList from './components/NamesList';

/* ############################## */
/* ##### Main app component ##### */
/* ############################## */

class App extends Component {
  render() {
    return(
      <div>
        <NamesList data ={this.props.data}/>
        <Credit />
      </div>
    )
  }
}

export default App;
