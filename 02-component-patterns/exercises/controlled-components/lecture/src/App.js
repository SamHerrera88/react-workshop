import React, {Component} from 'react'

import RadioGroup from './RadioGroup'
import './App.css'

class App extends Component {
  render() {
    return (
      <RadioGroup>
        <RadioGroup.Option value="First" label="1st" />
        <RadioGroup.Option value="Second" label="2nd" />
        <RadioGroup.Option value="Third" />
      </RadioGroup>
    )
  }
}

export default App
