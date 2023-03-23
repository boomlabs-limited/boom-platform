import Image from 'next/image'
import WalletButton from './WalletConnectButton'
import { useState } from 'react'
import Profile from './Profile'
import { configureChains, createClient, WagmiConfig, useAccount, useConnect, useEnsName } from 'wagmi'

export default function NavBar({ user, scale, setScale }) {
    const { address, isConnected } = useAccount('')
    // const [address, setAddress] = useState('0x7A02A9b9A7Ce979cFEB7456D40B6c8b3C3d6E98B')
    // const [isConnected, setIsConnected] = useState(true)
    // const [scale, setScale] = useState(0)
    return (

        <header>
            <nav className="flex items-center justify-between flex-wrap p-6 400">
                <div className="flex items-center flex-1 justify-between ">
                    <div className='relative h-[8vh] md:w-[8.5vw] w-[13vh]'>
                        <Image src="/logo.svg" alt="logo" fill className="mr-12" />
                    </div>
                    {
                        isConnected ? (
                            <div className='flex flex-col gap-1'>
                                <div onClick={
                                    () => {
                                        setScale(scale === 0 ? 1 : 0)
                                    }
                                } className='500 flex flex-row items-center text-sm md:text-xl font-[500] gap-x-[1vw] pr-10'>
                                    <div
                                        className='relative h-[5vh] w-[5vh] '>
                                        <Image src="/Profile.png" fill />
                                    </div>
                                    <p>{
                                        user ? (user == address ?
                                            address.slice(0, 6) + '...' + address.slice(-4) : user
                                        ) : address.slice(0, 6) + '...' + address.slice(-4)
                                    }</p>
                                    {/* <WalletButton /> */}
                                </div>
                                <div >
                                    <Profile scale={scale} address={address} />
                                </div>
                            </div>
                        ) :<WalletButton />


                    }
                </div>

            </nav>
        </header >


    );
}
