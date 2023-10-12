/**
 * Main webpage content
 */

import { ArtDecoImg } from "../components/artdeco"
import { InstagramEmbed } from 'react-social-media-embed';
import logo from "/logo.svg"

export const Main = (props: { onClick: () => void }) => <div
    className="w-full max-w-lg min-w-48 max-h-full relative flex flex-col justify-center items-center space-y-4">

    <ArtDecoImg src={logo} animate={["", 1]} className="h-8 md:h-12 w-auto" />

    <div className={`max-h-96 min-w-48 w-full p-px border border-4 border-double border-neutral-700 overflow-y-auto 
        animate__animated animate__flipInX`}
    >
        <InstagramEmbed url="https://www.instagram.com/p/CyEF2RxtbKl/"
            linkText="Loading creations..." height="auto" width="auto" />
    </div>

</div>