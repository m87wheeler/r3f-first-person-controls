import * as React from "react";
import { BoxProps, useBox } from "@react-three/cannon";
import { Vector3Tuple } from "three";

interface Props extends BoxProps {}

const Step: React.FC<Props> = ({ ...props }) => {
  const args: Vector3Tuple = props?.args || [3, 0.25, 3];
  const [ref] = useBox(() => ({
    args,
    type: "Static",
    ...props,
  }));

  return (
    <mesh
      // @ts-ignore
      ref={ref}
    >
      <meshStandardMaterial color={"white"} />
      <boxBufferGeometry args={args} />
    </mesh>
  );
};

export default Step;
