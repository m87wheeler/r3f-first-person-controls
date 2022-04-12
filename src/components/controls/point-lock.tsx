import { PointerLockControls as Controls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as React from "react";

interface Props {}

const PointLockControls: React.FC<Props> = ({ ...props }) => {
  const { camera, gl } = useThree();
  const controls = React.useRef();

  React.useEffect(() => {
    if (!controls || !controls.current) return;
    const lockControls = () => {
      // @ts-ignore
      controls.current.lock();
    };
    document.addEventListener("click", lockControls);
    return () => document.removeEventListener("click", lockControls);
  }, []);

  // @ts-ignore
  return <Controls ref={controls} args={[camera, gl.domElement]} {...props} />;
};

export default PointLockControls;
