import * as React from "react";
import Floor from "../structure/floor/floor";
import Wall from "../structure/wall/wall";

interface Props {}

const Scene: React.FC<Props> = () => {
  return (
    <group>
      <group>
        <Floor args={[40, 0.5, 40]} />
      </group>
      <group>
        <Floor args={[30, 0.5, 10]} position={[5, 8, 15]} color="tomato" />
        <Floor
          args={[30, 0.5, 10]}
          position={[15, 8, -5]}
          rotation={[0, Math.PI / 2, 0]}
          color="dodgerblue"
        />
        <Floor
          args={[30, 0.5, 10]}
          position={[-5, 8, -15]}
          rotation={[0, 0, 0]}
          color="yellow"
        />
        <Floor
          args={[30, 0.5, 10]}
          position={[-15, 8, 5]}
          rotation={[0, Math.PI / 2, 0]}
          color="hotpink"
        />
      </group>
      <group>
        <Wall args={[40, 7.5]} position={[0, 4, -20]} color="yellow" />
        <Wall
          args={[40, 7.5]}
          position={[0, 4, 20]}
          rotation={[0, Math.PI, 0]}
          color="tomato"
        />
        <Wall
          args={[40, 7.5]}
          position={[-20, 4, 0]}
          rotation={[0, Math.PI / 2, 0]}
          color="hotpink"
        />
        <Wall
          args={[40, 7.5]}
          position={[20, 4, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          color="dodgerblue"
        />
      </group>
    </group>
  );
};

export default Scene;
