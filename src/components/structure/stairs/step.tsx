import * as React from "react";
import { BoxProps, useBox } from "@react-three/cannon";
import { Vector3Tuple } from "three";

interface Props extends BoxProps {
  color?: string | number;
}

const Step: React.FC<Props> = ({ color, ...props }) => {
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
      <meshStandardMaterial color={color ? color : "white"} />
      <boxBufferGeometry args={args} />
    </mesh>
  );
};

export default Step;
