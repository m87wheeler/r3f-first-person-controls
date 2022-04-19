import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Vector3 } from "three";
import { OrbitControls, Sky } from "@react-three/drei";
import config from "../../config";
import Ground from "../ground/ground";
import Player from "../player/player";
import Scene from "../scene/scene";
import PlayerCamera from "../player/camera";

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
            <Scene />
          </Physics>
        </React.Suspense>
        {config.devMode && <OrbitControls />}
      </Canvas>
    </div>
  );
};

export default App;
