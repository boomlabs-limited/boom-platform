import Image from 'next/image'
import FrameTickets from '../FrameTickets'
import WalletButton from '../WalletConnectButton'
import { useAccount } from 'wagmi'
import UserNfts from '../UserNfts'
import ExploreDealsButton from '../ExploreDealsButton'
import { useEffect, useState } from 'react'
import Profile from '../Profile'
export default function LandingSection({user, setUser, setUserNFTcollection,}) {
  const [scale, setScale] = useState(0)
  const { address, isConnected } = useAccount('')
  // const [address , setAddress] = useState('0x7A02A9b9A7Ce979cFEB7456D40B6c8b3C3d6E98B')
  // const [isConnected , setIsConnected] = useState(true)

  return (
    <div className="flex flex-col h-fit items-center md:flex-row md:items-start justify-between md:h-screen">
      <div className="order-2 md:order-1  md:pl-[12vw]">
        {isConnected ? (
          <div className="flex flex-1 flex-col items-center md:items-start h-fit w-fit ">
            <p
              className={`font-display text-4xl xl:text-8xl xl:leading-tight pt-24`}
            >
              Hey
            </p>
            <div className=" flex items-center md:items-start md:justify-start justify-center">
              <input
                className={`border-black text-center md:text-start font-display border-none text-4xl xl:text-8xl xl:leading-tight caret-unselected-gray placeholder:text-unselected-gray`}
                size="10"
                placeholder={`${address.slice(0, 9)}...`}
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
            </div>
            <UserNfts walletAddress={address} setUserNFTcollection={setUserNFTcollection}
            />
          </div>
        ) : (
          <div className="flex flex-1 flex-col text-start items-start md:text-start h-fit  md:pr-[11.6vw]">
            <p
              className={` font-display text-4xl xl:text-8xl xl:leading-tight pt-24`}
            >
              Get <br className="hidden md:block" />
              Amazing
              <br />
              offers <br className="hidden md:block" />
              NOW
            </p>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-5 md:m-0">
              <div className="">
                <ExploreDealsButton 
                  setScale={setScale}
                  scale={scale}
                />
                <Profile scale={scale} />
              </div>
              <div className="h-[7vmax] w-[7vmax] relative ">
                <Image
                  src="./bubbles.svg"
                  fill
                  className="z-[10] md:translate-x-20 md:-translate-y-5 "
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="order-1 md:order-1 h-fit pt-12 w-full">
        <FrameTickets />
      </div>
    </div>
  )
}
