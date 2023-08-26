import React from 'react'

const NftifyContext = React.createContext({
  response1: [],
  response2: [],
  userInput: [],
  activeTab: 'TOKEN',
  updateUserInput: () => {},
  fetchDetails: () => {},
  updateToToken: () => {},
  updateToPair: () => {},
})

export default NftifyContext
