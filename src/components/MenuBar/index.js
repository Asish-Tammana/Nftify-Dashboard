import {Component} from 'react'
import {SiNintendogamecube} from 'react-icons/si'
import {TbHexagon3D} from 'react-icons/tb'
import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'
import {LiaObjectUngroupSolid} from 'react-icons/lia'
import {Link} from 'react-router-dom'
import NftifyContext from '../../context/nftifyContext'
import './index.css'

class MenuBar extends Component {
  render() {
    return (
      <NftifyContext.Consumer>
        {value => {
          const {activeTab, updateToToken, updateToPair} = value

          const tokenClicked = () => {
            updateToToken()
          }

          const pairClicked = () => {
            updateToPair()
          }

          const activeClass1 = activeTab === 'TOKEN' ? 'active-class' : ''
          const activeClass2 = activeTab === 'PAIR' ? 'active-class' : ''

          return (
            <div className="menu-container">
              <div className="top-con">
                <div className="menu-item">
                  <SiNintendogamecube className="menu-icon" />
                  <h1 className="nftify">NFTify</h1>
                </div>
                <Link
                  to="/token-address"
                  className={`${activeClass1} menu-item`}
                  onClick={tokenClicked}
                >
                  <TbHexagon3D className="menu-icon" />
                  <h1 className="nftify menu-option-name">Token Address</h1>
                </Link>
                <Link
                  to="/pair-address"
                  className={`${activeClass2} menu-item`}
                  onClick={pairClicked}
                >
                  <LiaObjectUngroupSolid className="menu-icon" />
                  <h1 className="nftify menu-option-name">Pair Address</h1>
                </Link>
              </div>
              <div className="handles-container">
                <FaFacebookSquare className="handle-icon" />
                <FaLinkedin className="handle-icon" />
                <FaTwitterSquare className="handle-icon" />
              </div>
            </div>
          )
        }}
      </NftifyContext.Consumer>
    )
  }
}

export default MenuBar
