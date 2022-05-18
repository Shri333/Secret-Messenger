import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { contract, web3 } from '../dapp/config'

const Home: NextPage = () => {
  const [text, setText] = useState('')

  const handleMessageChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setText(target.value)
  }

  const getMessage = async () => {
    try {
      setText(await contract.methods.getMessage().call())
    } catch (err) {
      alert(`Error: ${(err as any).message}`)
    }
  }

  const setMessage = async () => {
    const _text = text
    try {
      const accounts = await web3.eth.requestAccounts()
      setText('Loading...')
      await contract.methods.setMessage(_text).send({ from: accounts[0] })
      alert(`Messsage set to "${_text}"`)
    } catch (err) {
      alert(`Error: ${(err as any).message}`)
    } finally {
      setText(_text)
    }
  }

  return (
    <>
      <Head>
        <title>Secret Messenger</title>
        <meta name="description" content="Dapp for sending a secret message" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Secret Messenger</h1>
      <input type="text" value={text} onChange={handleMessageChange} />
      <button onClick={getMessage}>Get Message</button>
      <button onClick={setMessage}>Set Message</button>
    </>
  )
}

export default Home
