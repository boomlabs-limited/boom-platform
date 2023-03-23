// 'use client'
import Image from 'next/image'

import { Web3Button, useWeb3Modal } from '@web3modal/react'

import { InjectedConnector } from 'wagmi/connectors/injected'

import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
  useConnect,
  useEnsName,
} from 'wagmi'

export default function WalletButton() {
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal()
  return (
    <button
      // onClick={() => open()}
      className="flex h-[6vh] md:w-[11.5vw] w-[16vh] relative"
    >
      <Image src="/ConnectWalletBottom.svg" fill />
      <Image className='-translate-x-1 -translate-y-1 
                        hover:-translate-x-2 hover:-translate-y-2 
                        active:translate-x-0 active:translate-y-0' src="/ConnectWalletTop.svg" fill />
    </button>
  )
}
