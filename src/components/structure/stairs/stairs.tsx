import * as React from "react";
import Step from "./step";

interface Props {
  stepHeight: number;
  stepTotal: number;
  rise?: number;
  color?: string | number;
}

const Stairs: React.FC<Props> = ({
  stepHeight,
  stepTotal,
  rise = 0,
  color,
}) => {
  return (
    <group>
      {Array.from(Array(stepTotal)).map((_, i) => (
        <Step
          key={i}
          args={[3, stepHeight, 3]}
          position={[i * 0.75, 0.25 + i * stepHeight + rise, 0]}
          color={color}
        />
      ))}
    </group>
  );
};

export default Stairs;
