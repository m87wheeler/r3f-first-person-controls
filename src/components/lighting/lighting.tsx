import * as React from "react";

interface Props {}

const Lighting: React.FC<Props> = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={0.75}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.75} />
      <pointLight position={[0, -10, 0]} intensity={0.75} />
    </group>
  );
};

export default Lighting;
