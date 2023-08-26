import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
// import {ConnectButton} from '@rainbow-me/rainbowkit'
import NftifyContext from '../../context/nftifyContext'
import './index.css'

class Header extends Component {
  render() {
    return (
      <NftifyContext.Consumer>
        {value => {
          const {updateUserInput, fetchDetails} = value

          const searchClicked = event => {
            event.preventDefault()
            fetchDetails()
          }

          return (
            <div className="header-container">
              <div className="search-container">
                <form onSubmit={searchClicked}>
                  <input
                    type="text"
                    className="search-bar"
                    onChange={updateUserInput}
                    placeholder="Search"
                  />
                </form>
                <AiOutlineSearch className="search-icon" />
              </div>

              <button type="button" className="connect-button">
                Connect
              </button>
            </div>
          )
        }}
      </NftifyContext.Consumer>
    )
  }
}

export default Header
