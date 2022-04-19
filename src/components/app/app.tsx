import * as React from "react";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import Ground from "../ground/ground";
import { OrbitControls, Sky } from "@react-three/drei";
import Player from "../player/player";
import PlayerCamera from "../player/camera";
import { Vector3 } from "three";
import config from "../../config";
import Stairs from "../stairs/stairs";
import Floor from "../floor/floor";
import StairsUpper from "../stairs/stairs-upper";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="app-container">
      <Canvas shadows>
        <PlayerCamera />
        <Sky sunPosition={new Vector3(100, 10, 100)} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <React.Suspense fallback={<></>}>
          <Physics gravity={[0, -30, 0]}>
            <Ground />
            <Player />
            <>
              s
              <Stairs />
              <StairsUpper />
              <Floor position={[5.5, 13 * 0.5 - 0.125, 6.5]} />
            </>
          </Physics>
        </React.Suspense>
        {config.devMode && <OrbitControls />}
      </Canvas>
    </div>
  );
};

export default App;
