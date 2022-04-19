import * as React from "react";
import * as THREE from "three";
import { PlaneProps, usePlane } from "@react-three/cannon";
import { Vector2Tuple } from "three";

interface Props extends PlaneProps {
  args: Vector2Tuple;
  doubleSided?: boolean;
  color?: string | number;
  map?: any;
  displacementMap?: any;
  normalMap?: any;
  roughnessMap?: any;
  aoMap?: any;
  displacementScale?: number;
}

const Wall: React.FC<Props> = ({
  args,
  doubleSided,
  color,
  map,
  displacementMap,
  normalMap,
  roughnessMap,
  aoMap,
  displacementScale,
  ...props
}) => {
  const [ref] = usePlane(() => ({
    args,
    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref} castShadow receiveShadow>
      <planeBufferGeometry attach="geometry" args={args} />
      <meshPhongMaterial
        color={color ? color : "white"}
        side={THREE[doubleSided ? "DoubleSide" : "FrontSide"]}
        map={map}
        displacementMap={displacementMap}
        normalMap={normalMap}
        aoMap={aoMap}
        displacementScale={displacementScale}
      />
    </mesh>
  );
};

export default Wall;
