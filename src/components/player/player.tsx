import * as React from "react";
import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { usePlayerControls } from "../../hooks/use-player-controls";
import { Vector3, Vector3Tuple } from "three";
import config from "../../config";
import PointLockControls from "../controls/point-lock";

interface Props {}

const SPEED = 5;

const Player: React.FC<Props> = ({ ...props }) => {
  const { camera } = useThree();

  const {
    moveForward,
    moveBackward,
    moveLeft,
    moveRight,
    jump,
    // rotateClockwise,
    // rotateAntiClockwise,
  } = usePlayerControls();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
    ...props,
  }));

  const velocity = React.useRef([0, 0, 0]);
  React.useEffect(() => {
    const subRotation = api.velocity.subscribe((v) => (velocity.current = v));
    return subRotation;
  }, [api.velocity]);

  const position = React.useRef<Vector3Tuple>([0, 0, 0]);
  React.useEffect(() => {
    const subRotation = api.position.subscribe((p) => (position.current = p));
    return subRotation;
  }, [api.position]);

  useFrame(() => {
    if (!ref?.current || !position?.current) return;
    if (!config.devMode) {
      camera.position.copy(
        new Vector3(
          position.current[0],
          position.current[1],
          position.current[2]
        )
      );
    }
    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      Number(moveBackward) - Number(moveForward)
    );
    const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(Number(velocity.current[1].toFixed(2))) < 0.05) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
    }
  });

  return (
    <>
      {/** @ts-ignore */}
      <mesh ref={ref}>
        <sphereBufferGeometry />
        <meshBasicMaterial color="gray" />
      </mesh>
      {!config.devMode && <PointLockControls />}
    </>
  );
};

export default Player;
