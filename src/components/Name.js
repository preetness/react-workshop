import React, {Component} from 'react'

class Name extends Component {
  render(){
    //return(<div className={this.props.class}>
      return(<div className='inline'>
        {this.props.name}
      </div>)
  }
}

export default Name;
