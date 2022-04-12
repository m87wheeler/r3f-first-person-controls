import * as React from "react";
import Step from "./step";

interface Props {}

const Stairs: React.FC<Props> = () => {
  return (
    <group>
      {Array.from(Array(13)).map((_, i) => (
        <Step
          key={i}
          args={[3, 0.5, 3]}
          position={[i * 0.75, 0.25 + i * 0.5, 0]}
        />
      ))}
    </group>
  );
};

export default Stairs;
