import Web3 from 'web3'
import ABI from './Message.json'
import nextConfig from '../next.config'

const web3 = new Web3(Web3.givenProvider || nextConfig.env!.INFURA_URL)
const contract = new web3.eth.Contract(ABI as any, nextConfig.env!.CONTRACT_ADDRESS)

export { web3, contract }
