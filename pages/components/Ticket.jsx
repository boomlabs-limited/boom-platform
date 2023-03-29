import Image from 'next/image'
import { useEffect } from 'react'

export default function Ticket({ className, bg }) {
    return (
        <div id="ticket" className="flex mx-1 bg-no-repeat bg-contain w-[27vmax] h-[10vmax]">
            <div className={`bg-no-repeat bg-contain w-[27vmax] h-[10vmax] animate-wiggleOut  ${bg} ${className} `}>
                {/* hover:animate-wiggle hover:bg-[url('/TicketOutlineYellow.svg')]`}> */}
                <div className="flex flex-row items-center justify-center h-full ">
                    <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col items-center justify-between py-[1.25vmax] pl-[2vmax] h-full ">
                            <div className='w-[2vmax] h-[2vmax] relative'>
                                <Image src="/ticketlogo10.svg" alt="logo" fill sizes='2vmax' className="mr-8" />
                            </div>
                            <div className='w-[2vmax] h-[2vmax] relative'>
                                <Image src="/ticketlogo2.svg" alt="logo" fill sizes='2vmax' className="mr-8" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-[1vmax] h-full overflow-hidden ">
                            <p className="text-[2vmax] font-bold leading-tight md:text-[1.4vmax]">20% OFF</p>
                            <p className="text-[0.7vmax] font-medium leading-tight">20% off on all creators subscription on YouTube if you are VeeFriends holder.</p>
                        </div>
                        <div className="flex flex-col items-center justify-end py-[1vmax] pr-[2.5vmax] h-full">
                            <p className="text-[0.7vmax] font-medium md:text-xm">3254</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-[1vmax] h-full w-[9vmax] px-[3.5vmax]">
                        <p className="text-[2vmax] font-bold transform -rotate-90 md:text-[1.4vmax]">AL3LD3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//code for mouse hover and mouse leave


    // useEffect(() => {
    //     function startWiggle() {
    //         const ticketdiv = document.getElementById('ticketdiv')
    //         ticketdiv.classList.add('animate-wiggle')
    //         ticketdiv.classList.add('hover:bg-[url("/TicketOutlineYellow.svg")]')
    //     }
    //     function stopWiggle() {
    //         const ticketdiv = document.getElementById('ticketdiv')
    //         ticketdiv.classList.remove('animate-wiggle')
    //         ticketdiv.classList.remove('hover:bg-[url("/TicketOutlineYellow.svg")]')
    //     }
    //     const ticketdiv = document.getElementById('ticketdiv')
    //     ticketdiv.addEventListener('mouseenter', startWiggle)
    //     ticketdiv.addEventListener('mouseleave', stopWiggle)
    //     return () => {
    //         ticketdiv.removeEventListener('mouseenter', startWiggle)
    //         ticketdiv.removeEventListener('mouseleave', stopWiggle)
    //     }
    // }, [])

     // ticketdivs.forEach((ticketdiv) => {
    //   function startWiggle() {
    //     ticketdiv.classList.add('animate-wiggle');
    //     ticketdiv.classList.add('bg-[url("/TicketOutlineYellow.svg")]');
    //   }
    //   function stopWiggle() {
    //     ticketdiv.classList.remove('animate-wiggle');
    //     ticketdiv.classList.remove('bg-[url("/TicketOutlineYellow.svg")]');
    //   }
    //   ticketdiv.addEventListener('mouseenter', startWiggle);
    //   ticketdiv.addEventListener('mouseleave', stopWiggle);
    // });