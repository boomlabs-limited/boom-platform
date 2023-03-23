import { Link, Element } from 'react-scroll';
import Image from "next/image"
import { useState } from 'react';
export default function ExploreDealsButton({
}) {
    let [clicked, setClicked] = useState(false)
    return (
        <div className="flex h-[10vh] w-[21vh] relative"
            onClick={() => {
                setClicked(true)
            }}
        >
            {/* <Image src="/ExploreLatestDeals.svg" fill /> */}
            < Image src="/ExploreLatestDealsBottom.svg" fill />
            <Image className='-translate-x-1 -translate-y-1 
                            hover:-translate-x-2 hover:-translate-y-2 
                            active:translate-x-0 active:translate-y-0'
                src={
                    clicked ? "/ComingSoon.svg" : "/ExploreLatestDealsTop.svg"
                } fill />
        </div >)
}