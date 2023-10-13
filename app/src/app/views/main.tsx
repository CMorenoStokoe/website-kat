/**
 * Main webpage content
 */
import { ArtDecoImg } from "../components/artdeco"
import { InstagramEmbed } from 'react-social-media-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "/logo.svg"
import ig1 from "/ig-1.png"
import ig2 from "/ig-2.png"
import ig3 from "/ig-3.png"
import ig4 from "/ig-4.png"
import ig5 from "/ig-5.png"
import ig6 from "/ig-6.png"
import { Button } from "../components/button";
import { Gallery } from "../components/gallery";

export const Main = (props: { onClick: () => void }) => <div
    className="w-full max-w-lg min-w-48 max-h-full p-4 relative flex flex-col justify-center items-center space-y-4">

    <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-4">

        <ArtDecoImg src={logo}
            animate="none"
            className="h-8 md:h-16 w-auto" />


        <div className={`flex flex-col justify-center items-center animate__animated animate__flipInX`}>
            <a className="w-full flex flex-col" href="https://www.instagram.com/katscocktailbar/"
                target="_blank">
                <p style={{ fontFamily: "Poiret One", color: "#E0CA8D" }}
                    className={`
                        p-1 bg-none tracking-wider 
                        hover:bg-neutral-900
                        animate__animated animate__pulse animate__slow animate__repeat-3 animate__delay-2s`}
                >
                    <FontAwesomeIcon icon={faInstagram} className="pr-1" />
                    katscocktailbar
                </p>
            </a>
            <Gallery sources={[ig1, ig2, ig3, ig4, ig5, ig6]} />
        </div>
    </div>


</div>

/*
<InstagramEmbed url="https://www.instagram.com/p/CyEF2RxtbKl/"
                linkText="Loading creations..." height="auto" width="auto" />
*/