import React, {Component} from 'react'
import MyFirstComponent from './MyFirstComponent.js'
import AnotherComponent from './AnotherComponent.js'

class BasicComponent extends Component {
  render(){
    return(<div>
        <MyFirstComponent />
        <AnotherComponent />
      </div>)
  }
}

export default BasicComponent;
