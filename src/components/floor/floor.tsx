import * as React from "react";
import { BoxProps, useBox } from "@react-three/cannon";
import { Vector3Tuple } from "three";

interface Props extends BoxProps {}

const Floor: React.FC<Props> = ({ ...props }) => {
  const args: Vector3Tuple = [10, 0.25, 10];
  const [ref] = useBox(() => ({
    type: "Static",
    args,
    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref} {...props}>
      <meshStandardMaterial color={"white"} />
      <boxBufferGeometry args={args} />
    </mesh>
  );
};

export default Floor;
