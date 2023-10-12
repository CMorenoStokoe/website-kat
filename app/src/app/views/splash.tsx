/**
 * Splash page
 */

import { Button } from "../components/button"
import { ArtDecoImg } from "../components/artdeco"
import logo from "../../assets/logo.svg"

export const Splash = (props: { onClick: () => void }) => <div
    className="w-full max-w-lg overflow-hidden relative flex flex-col justify-center items-center space-y-4">

    <div className="flex flex-col items-center">
        <ArtDecoImg src={logo} animate={["jackInTheBox", 4]} className="px-8 mt-8 h-32 w-auto" />
        <p style={{ fontFamily: "Poiret One" }}
            className={"p-2 px-4 "
                + "animate__animated "}>
            The art of mixology.
        </p>
    </div>

    <Button text="Enter" onClick={props.onClick} className="w-36 animate__animated animate__flipInX animate__delay-5s" />
</div>