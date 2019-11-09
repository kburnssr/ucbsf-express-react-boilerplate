import React from 'react'

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('/api/all', {
      method: 'GET'
    })
    .then( r => r.json() )
    .then( r => console.log(r) )
  }
  
  render() {
    return (
      <div>
        My first React App
      </div>
    )
  }
}

export default App
