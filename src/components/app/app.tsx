import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { OrbitControls, softShadows, Stars } from "@react-three/drei";
import config from "../../config";
import Player from "../player/player";
import Scene from "../scene/scene";
import PlayerCamera from "../player/camera";
import Lighting from "../lighting/lighting";
import Instructions from "./instructions";

softShadows();

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="app-container">
      <Canvas shadows>
        <PlayerCamera />
        <fog attach="fog" args={["#283e51", 0, 40]} />
        <Stars />
        <Lighting />
        <React.Suspense fallback={<></>}>
          <Physics gravity={[0, -30, 0]}>
            <Player />
            <Scene />
          </Physics>
        </React.Suspense>
        {config.devMode && <OrbitControls />}
      </Canvas>
      <Instructions />
    </div>
  );
};

export default App;
