import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import NftifyContext from './context/nftifyContext'
import TokenAddress from './components/TokenAddress'
import PairAddress from './components/PairAddress'
import Home from './components/Home'
import './App.css'

class App extends Component {
  state = {
    response1: [],
    response2: [],
    activeTab: 'TOKEN',
    userInput: '',
  }

  updateToToken = () => {
    this.setState({
      activeTab: 'TOKEN',
    })
  }

  updateToPair = () => {
    this.setState({
      activeTab: 'PAIR',
    })
  }

  updateUserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  fetchDetails = async () => {
    const {userInput} = this.state

    const parameter1 = userInput.replace(' ', ',')
    const parameter2 = userInput.replace(' ', '%20')

    const url1 = `https://api.dexscreener.com/latest/dex/tokens/${parameter1}`
    const url2 = `https://api.dexscreener.com/latest/dex/search/?q=${parameter2}`

    const response1 = await fetch(url1)
    if (response1.ok) {
      const data1 = await response1.json()

      this.setState({
        response1: data1.pairs,
      })
    }

    const response2 = await fetch(url2)
    if (response2.ok) {
      const data2 = await response2.json()
      this.setState({
        response2: data2.pairs,
      })
    }
  }

  render() {
    const {response1, response2, userInput, activeTab} = this.state

    return (
      <NftifyContext.Provider
        value={{
          response1,
          response2,
          userInput,
          activeTab,
          updateUserInput: this.updateUserInput,
          fetchDetails: this.fetchDetails,
          updateToToken: this.updateToToken,
          updateToPair: this.updateToPair,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/token-address" component={TokenAddress} />
          <Route exact path="/pair-address" component={PairAddress} />
        </Switch>
      </NftifyContext.Provider>
    )
  }
}

export default App
