const HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic = process.env.MNEMONIC.trim()

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, process.env.INFURA_URL),
      network_id: 4
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
}
