/**
 * Main webpage content
 */

import ig from '../../assets/ig.png'
import { Button } from "../components/button"
import { ArtDecoImg } from "../components/artdeco"
import { InstagramEmbed } from 'react-social-media-embed';
import logo from "../../assets/logo.svg"

export const Main = (props: { onClick: () => void }) => <div
    className="w-full max-w-lg min-w-48 max-h-full relative flex flex-col justify-center items-center">

    <ArtDecoImg src={logo} animate={["flipInX", 1]} className="h-8 md:h-12 w-auto mb-2" />

    <div className={`max-h-96 min-w-48 w-full p-px border border-4 border-double border-neutral-700 overflow-y-auto 
        animate__animated animate__backInUp animate__delay-1s`}
    >
        <InstagramEmbed url="https://www.instagram.com/p/CyEF2RxtbKl/"
            linkText="Loading creations..." height="auto" width="auto" />
    </div>

</div>