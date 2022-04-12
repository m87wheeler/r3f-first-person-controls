import { usePlane } from "@react-three/cannon";
import * as React from "react";

interface Props {}

const Ground: React.FC<Props> = ({ ...props }) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],

    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Ground;
