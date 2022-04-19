import * as React from "react";
import { usePlane } from "@react-three/cannon";

interface Props {}

const Ground: React.FC<Props> = ({ ...props }) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],

    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Ground;
