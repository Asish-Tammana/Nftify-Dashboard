import {Component} from 'react'
import NftifyContext from '../../context/nftifyContext'
import Header from '../Header'
import MenuBar from '../MenuBar'
import SearchResult from '../SearchResult'
import './index.css'

class PairAddress extends Component {
  renderData = response2 => {
    if (response2 === null) {
      return <h1 className="no-data-found">No Data Found.....</h1>
    }

    if (response2 === null) {
      return <p>search data</p>
    }

    return (
      <>
        {response2.map(each => (
          <SearchResult key={each.pairAddress} pairDetails={each} />
        ))}
      </>
    )
  }

  render() {
    return (
      <NftifyContext.Consumer>
        {value => {
          let {response2} = value
          const comparePrices = (a, b) => b.priceUsd - a.priceUsd

          if (response2 !== null) {
            response2.sort(comparePrices)
            response2 = response2.slice(0, 10)
          }

          console.log(response2)

          return (
            <>
              <div className="bg-container">
                <MenuBar />
                <div className="dash-board">
                  <Header />
                  <h1 className="dashboard-title">Pair Search Results</h1>
                  {this.renderData(response2)}
                </div>
              </div>
            </>
          )
        }}
      </NftifyContext.Consumer>
    )
  }
}

export default PairAddress
