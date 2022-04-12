import * as React from "react";
import { PerspectiveCamera } from "@react-three/drei";
import config from "../../config";

interface Props {}

const PlayerCamera: React.FC<Props> = ({ ...props }) => {
  const ref = React.useRef();

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault={!config.devMode}
      rotation={[0, 0, 0]}
      args={[45, window.innerWidth / window.innerHeight, 1, 1000]}
      {...props}
    />
  );
};

export default PlayerCamera;
