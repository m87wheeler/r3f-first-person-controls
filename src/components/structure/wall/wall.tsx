import * as React from "react";
import * as THREE from "three";
import { PlaneProps, usePlane } from "@react-three/cannon";
import { Vector2Tuple } from "three";

interface Props extends PlaneProps {
  args: Vector2Tuple;
  doubleSided?: boolean;
  color?: string | number;
}

const Wall: React.FC<Props> = ({ args, doubleSided, color, ...props }) => {
  const [ref] = usePlane(() => ({
    args,
    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial
        color={color ? color : "white"}
        side={THREE[doubleSided ? "DoubleSide" : "FrontSide"]}
      />
    </mesh>
  );
};

export default Wall;
