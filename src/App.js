import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Child = () => {
  console.log('render')
  return (
    <div>child</div>
  )
}

function test(target, prop, descriptor) {
  console.log(target)
}

@test()
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qwe: 1
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={()=>this.setState({
          qwe: 10
        })}>toggle</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child/>
      </div>
    );
  }
}

export default App;
