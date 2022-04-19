import * as React from "react";
import * as THREE from "three";
import { BoxProps, useBox } from "@react-three/cannon";
import { Vector3Tuple } from "three";
import { useTexture } from "@react-three/drei";

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

  const [floorCMap, floorNMap] = useTexture([
    "assets/materials/wood-floor/base-color.jpg",
    "assets/materials/wood-floor/normal.jpg",
  ]);
  if (floorCMap) {
    floorCMap.wrapS = floorCMap.wrapT = THREE.RepeatWrapping;
    floorCMap.repeat.set(0.5, 1);
  }

  return (
    <mesh
      // @ts-ignore
      ref={ref}
      castShadow
      receiveShadow
    >
      <meshPhongMaterial
        color={color ? color : "white"}
        map={floorCMap}
        normalMap={floorNMap}
      />
      <boxBufferGeometry args={args} />
    </mesh>
  );
};

export default Step;
