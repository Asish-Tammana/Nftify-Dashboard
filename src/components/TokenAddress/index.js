import {Component} from 'react'
import {SiNintendogamecube} from 'react-icons/si'

import NftifyContext from '../../context/nftifyContext'
import Header from '../Header'
import MenuBar from '../MenuBar'
import SearchResult from '../SearchResult'

// import {alchemyProvider} from 'wagmi/providers/alchemy'
// import {publicProvider} from 'wagmi/providers/public'
import './index.css'

class TokenAddress extends Component {
  renderData = response1 => {
    if (response1 === null) {
      return <h1 className="no-data-found">No Data Found.....</h1>
    }
    if (response1 === []) {
      return <p>search data</p>
    }
    return (
      <>
        {response1.map(each => (
          <SearchResult key={each.pairAddress} pairDetails={each} />
        ))}
      </>
    )
  }

  render() {
    return (
      <NftifyContext.Consumer>
        {value => {
          let {response1} = value
          const {response2} = value

          const comparePrices = (a, b) => b.priceUsd - a.priceUsd

          if (response1 !== null) {
            response1.sort(comparePrices)
            response1 = response1.slice(0, 10)
          }
          console.log(response1)
          return (
            <>
              <div className="bg-container">
                <MenuBar />
                <>
                  <div className="dash-board">
                    <Header />
                    <h1 className="dashboard-title">Token Search Results</h1>
                    {this.renderData(response1)}
                  </div>
                </>
                <div className="mobile-view">
                  <div className="mobile-header-container">
                    <div className="mobile-title">
                      <SiNintendogamecube className="mobile-menu-icon" />
                      <h1 className="nftify">NFTify</h1>
                    </div>
                    <button type="button" className="mobile-connect-button">
                      Connect
                    </button>
                  </div>
                  <Header />
                  <div className="mobile-main-container">
                    <h1 className="mobile-side-heading">Pair Address</h1>
                    {this.renderData(response2)}
                    <h1 className="mobile-side-heading">Token Address</h1>
                    {this.renderData(response1)}
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </NftifyContext.Consumer>
    )
  }
}

export default TokenAddress
