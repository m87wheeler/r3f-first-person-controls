import { useBox } from "@react-three/cannon";
import * as React from "react";
import { Vector3Tuple } from "three";

interface Props {}

const Floor: React.FC<Props> = ({ ...props }) => {
  const args: Vector3Tuple = [10, 0.25, 10];
  const [hover, set] = React.useState(false);
  const [ref] = useBox(() => ({
    type: "Static",
    args,
    position: [5.5, 13 * 0.5 - 0.125, 6.5],
    ...props,
  }));

  // @ts-ignore
  return (
    <mesh
      // @ts-ignore
      ref={ref}
      onPointerEnter={() => set(true)}
      onPointerLeave={() => set(false)}
    >
      <meshStandardMaterial color={hover ? "grey" : "white"} />
      <boxBufferGeometry args={args} />
    </mesh>
  );
};

export default Floor;
