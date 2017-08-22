import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Name from './Name.js';
import Header from './Header.js';
import Github from './Github.js';
import TabsLinks from './TabsLinks.js';
import TabsContainer from './TabsContainer.js';

const tabsEl = [
  {
    id: 1,
    content: <Github />
  },
  {
    id: 2,
    content: <Header />
  },
  {
    id: 3,
    content: <Name />
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: tabsEl,
      active: 1
    };
        

  };
  activeTab (item) {
    this.setState({active: item.id });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

       
          <TabsLinks 
            
            data={this.state.data} 
            activeId={this.state.active} 
            action={this.activeTab.bind(this, index)} />

          
        <TabsContainer>
          {this.state.data.content}
        </TabsContainer>
        

      </div>
    );
  }
}

export default App;
