const Message = artifacts.require('Message')

module.exports = (deployer) => {
  deployer.deploy(Message)
}