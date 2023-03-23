import { Web3Button, useWeb3Modal } from '@web3modal/react'

export default function Profile({
    address,
    email,
    scale
}) {
    const { isOpen, open, close, setDefaultChain } = useWeb3Modal()
    return (
        <div className={`rounded-lg flex flex-col gap-y-2 
                        border-2 border-black z-50 absolute
                         bg-white md:w-[11.5vw] w-[16vh] p-5 overflow-auto
                         items-start font-[500] text-lg origin-top
            ${scale === 0 ? 'scale-0' : ' animate-grow'
            } 
        `}
        onClick={(e) => {
            e.stopPropagation()
        }}
        >
            <p>Coming Soon</p>
        </div>
    )
}
//mt-[8vh] -ml-[5vmax]
