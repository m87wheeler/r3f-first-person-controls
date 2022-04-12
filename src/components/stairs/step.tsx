import { BoxProps, useBox } from "@react-three/cannon";
import * as React from "react";
import { Vector3Tuple } from "three";

interface Props extends BoxProps {}

const Step: React.FC<Props> = ({ ...props }) => {
  const args: Vector3Tuple = props?.args || [3, 0.25, 3];
  const [hover, set] = React.useState(false);
  const [ref] = useBox(() => ({
    args,
    type: "Static",
    ...props,
  }));

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

export default Step;
