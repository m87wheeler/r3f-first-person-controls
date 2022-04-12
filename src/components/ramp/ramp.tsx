import { usePlane } from "@react-three/cannon";
import * as React from "react";

interface Props {}

const Ramp: React.FC<Props> = ({ ...props }) => {
  const [ref] = usePlane(() => ({
    position: [20, 0, -30],
    rotation: [-Math.PI / 2, Math.PI / 4, 0],
    type: "Kinematic",
    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[20, 6]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Ramp;
