import * as React from "react";
import { CameraHelper } from "three";
import { PerspectiveCamera, useHelper } from "@react-three/drei";
import config from "../../config";

interface Props {}

const PlayerCamera: React.FC<Props> = ({ ...props }) => {
  const ref = React.useRef();
  useHelper(config.devMode ? null : ref, CameraHelper);

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
