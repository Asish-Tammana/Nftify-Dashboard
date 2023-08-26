import {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Home extends Component {
  render() {
    return <Redirect to="/token-address" />
  }
}

export default Home
