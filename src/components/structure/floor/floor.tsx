import * as React from "react";
import { BoxProps, useBox } from "@react-three/cannon";
import { Vector3Tuple } from "three";

interface Props extends BoxProps {
  args: Vector3Tuple;
  color?: string | number;
  map?: any;
  displacementMap?: any;
  normalMap?: any;
  roughnessMap?: any;
  aoMap?: any;
  displacementScale?: number;
}

const Floor: React.FC<Props> = ({
  args,
  color,
  map,
  displacementMap,
  normalMap,
  roughnessMap,
  aoMap,
  displacementScale,
  ...props
}) => {
  const [ref] = useBox(() => ({
    type: "Static",
    args,
    ...props,
  }));

  return (
    // @ts-ignore
    <mesh ref={ref} castShadow {...props}>
      <meshPhongMaterial
        color={color ? color : "white"}
        map={map}
        displacementMap={displacementMap}
        normalMap={normalMap}
        aoMap={aoMap}
        displacementScale={displacementScale}
      />
      <boxBufferGeometry args={args} />
    </mesh>
  );
};

export default Floor;
