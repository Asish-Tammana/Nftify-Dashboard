import {Component} from 'react'
import {BsFillExclamationCircleFill} from 'react-icons/bs'
import {TbHexagon3D} from 'react-icons/tb'
import {PiCurrencyDollarSimpleFill} from 'react-icons/pi'
import './index.css'

class SearchResult extends Component {
  render() {
    const {pairDetails} = this.props
    const {
      pairCreatedAt,
      baseToken,
      dexId,
      pairAddress,
      priceNative,
      priceUsd,
    } = pairDetails
    const {name, symbol, address} = baseToken
    return (
      <>
        <div className="search-result-container">
          <div className="result-card">
            <div className="result-title-container">
              <h1 className="result-card-title">Basic Info</h1>
              <BsFillExclamationCircleFill className="rotate" />
            </div>

            <table className="info-table">
              <tr>
                <td>
                  <span className="property">Pair Created At</span>
                </td>
                <td>
                  <span>{pairCreatedAt}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="property">Symbol</span>
                </td>
                <td>
                  <span>{symbol}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="property">Dex ID</span>
                </td>
                <td>
                  <span>{dexId}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="property">Pair Address</span>
                </td>
                <td>
                  <span className="address">{pairAddress}</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="result-card">
            <div className="result-title-container">
              <h1 className="result-card-title">Base Token</h1>
              <TbHexagon3D className="rotate" />
            </div>
            <table className="info-table">
              <tr>
                <td>
                  <span className="property">Name</span>
                </td>
                <td>
                  <span>{name}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="property">Symbol</span>
                </td>
                <td>
                  <span>{symbol}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="property">Address</span>
                </td>
                <td>
                  <span className="address">{address}</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="result-card">
            <div className="result-title-container">
              <h1 className="result-card-title">Quote Token</h1>
              <TbHexagon3D className="rotate" />
            </div>
            <table className="info-table">
              <tr>
                <td>
                  <span className="property">Name</span>
                </td>
                <td>
                  <span>{name}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="property">Symbol</span>
                </td>
                <td>
                  <span>{symbol}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="property">Address</span>
                </td>
                <td className="address">
                  <span>{address}</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="result-card">
            <div className="result-title-container">
              <h1 className="result-card-title">Price</h1>
              <PiCurrencyDollarSimpleFill className="rotate" />
            </div>
            <table className="info-table">
              <tr>
                <td>
                  <span className="property">Price Native</span>
                </td>
                <td>
                  <span>{priceNative}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="property">Price USD</span>
                </td>
                <td>
                  <span>{priceUsd}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <hr className="line" />
      </>
    )
  }
}

export default SearchResult
