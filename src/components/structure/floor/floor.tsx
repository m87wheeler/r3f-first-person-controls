import * as React from "react";
import { BoxProps, useBox } from "@react-three/cannon";
import { Vector3Tuple } from "three";

interface Props extends BoxProps {
  args: Vector3Tuple;
  color?: string | number;
}

const Floor: React.FC<Props> = ({ args, color, ...props }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    args,
    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref} {...props}>
      <meshStandardMaterial color={color ? color : "white"} />
      <boxBufferGeometry args={args} />
    </mesh>
  );
};

export default Floor;
