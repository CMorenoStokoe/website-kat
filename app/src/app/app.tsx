// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { Splash } from './views/splash';
import { ArtDecoImg } from "./components/artdeco"

import artZtl from "../assets/z-windows-tl.svg"
import artZtr from "../assets/z-windows-tr.svg"
import artZbl from "../assets/z-windows-bl.svg"
import artZbr from "../assets/z-windows-br.svg"

import artX from "../assets/x-grill.svg"
import artXflip from "../assets/x-grill-flip.svg"
import artY from "../assets/y-frill.svg"
import artYflip from "../assets/y-frill-flip.svg"
import { Main } from './views/main';

export function App() {

  // States
  const [view, setView] = useState<'splash' | 'main'>('splash')

  // Webapp
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">

      {/** Content */}
      <div className="w-full max-w-lg overflow-hidden relative flex flex-col justify-center items-center space-y-4">
        <ArtDecoImg src={artY} animate={["fadeInDown", 1]} className="w-full px-1 -top-1" />

        <div className="py-4 w-full flex flex-row text-center items-center justify-center">
          <ArtDecoImg src={artX} animate={["fadeInLeft", 2]} className="h-40" />

          {
            view === 'splash'
              ? <Splash onClick={() => setView('main')} />
              : <Main onClick={() => setView('splash')} />
          }

          <ArtDecoImg src={artXflip} animate={["fadeInRight", 2]} className="h-40" />
        </div>

        <ArtDecoImg src={artYflip} animate={["fadeInUp", 1]} className="w-full px-1 -bottom-1" />
      </div>

      {/** BG for desktop */}
      <div className="hidden md:flex w-full h-full flex-col justify-between absolute top-0 left-0 -z-10">
        <div className="w-full p-1 flex flex-row justify-between">
          <img src={artZtl} className="w-32 h-auto" />
          <img src={artZtr} className="w-32 h-auto" />
        </div>
        <div className="flex flex-row justify-between">
          <img src={artZbl} className="w-32 h-auto" />
          <img src={artZbr} className="w-32 h-auto" />
        </div>
      </div>

    </div>
  );
}

export default App;
