import * as React from "react";
import Floor from "../structure/floor/floor";
import Stairs from "../structure/stairs/stairs";
import Wall from "../structure/wall/wall";

interface Props {}

const Scene: React.FC<Props> = () => {
  const step = {
    height: 0.5,
    total: 15,
  };

  return (
    <group>
      {/** GROUND FLOOR */}
      <Floor args={[40, 0.5, 40]} color="grey" />
      {/** STAIRS */}
      <Stairs
        stepHeight={step.height}
        stepTotal={step.total}
        rise={0.25}
        color="grey"
      />
      {/** FIRST FLOOR */}
      <Floor args={[30, 0.5, 10]} position={[5, 8, 15]} color="grey" />
      <Floor
        args={[30, 0.5, 10]}
        position={[15, 8, -5]}
        rotation={[0, Math.PI / 2, 0]}
        color="grey"
      />
      <Floor
        args={[30, 0.5, 10]}
        position={[-5, 8, -15]}
        rotation={[0, 0, 0]}
        color="grey"
      />
      <Floor
        args={[30, 0.5, 10]}
        position={[-15, 8, 5]}
        rotation={[0, Math.PI / 2, 0]}
        color="grey"
      />
      {/** GROUND FLOOR WALLS */}
      <Wall args={[40, 7.5]} position={[0, 4, -20]} color="grey" />
      <Wall
        args={[40, 7.5]}
        position={[0, 4, 20]}
        rotation={[0, Math.PI, 0]}
        color="grey"
      />
      <Wall
        args={[40, 7.5]}
        position={[-20, 4, 0]}
        rotation={[0, Math.PI / 2, 0]}
        color="grey"
      />
      <Wall
        args={[40, 7.5]}
        position={[20, 4, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        color="grey"
      />
    </group>
  );
};

export default Scene;
