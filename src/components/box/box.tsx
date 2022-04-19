import { BoxProps, useBox } from "@react-three/cannon";
import * as React from "react";
import { Vector3Tuple } from "three";

interface Props extends BoxProps {
  color?: string | number;
}

const Box: React.FC<Props> = ({ color = 0xff0000, ...props }) => {
  const args: Vector3Tuple = props?.args || [2, 2, 2];
  const [ref] = useBox(() => ({
    args,
    type: "Static",
    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <meshStandardMaterial color={color} />
      <boxBufferGeometry args={args} />
    </mesh>
  );
};

export default Box;
