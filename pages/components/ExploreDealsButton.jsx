import { Link, Element } from 'react-scroll';
import Image from "next/image"
export default function ExploreDealsButton({
    setScale,
    scale
}) {
    return (
        <div
            onClick={
                () => {
                    setScale(scale === 0 ? 1 : 0)
                }
            }
            className="flex h-[10vh] w-[21vh] relative">
            {/* <Image src="/ExploreLatestDeals.svg" fill /> */}
            <Image src="/ExploreLatestDealsBottom.svg" fill />
            <Image className='-translate-x-1 -translate-y-1 
                            hover:-translate-x-2 hover:-translate-y-2 
                            active:translate-x-0 active:translate-y-0'
                src="/ExploreLatestDealsTop.svg" fill />
        </div>)
}