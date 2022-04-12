import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import * as React from "react";
import { Vector3, Vector3Tuple } from "three";
import { usePlayerControls } from "../../hooks/use-player-controls";
import config from "../../config";
import PointLockControls from "../controls/point-lock";

interface Props {}

const SPEED = 5;

const Player: React.FC<Props> = ({ ...props }) => {
  const { camera } = useThree();

  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    usePlayerControls();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
    ...props,
  }));

  const velocity = React.useRef([0, 0, 0]);
  React.useEffect(() => {
    const subPosition = api.velocity.subscribe((v) => (velocity.current = v));
    return subPosition;
  }, [api.velocity]);

  const position = React.useRef<Vector3Tuple>([0, 0, 0]);
  React.useEffect(() => {
    const subPosition = api.position.subscribe((p) => (position.current = p));
    return subPosition;
  }, [api.position]);

  useFrame(() => {
    if (!ref || !ref.current) return;
    if (!position || !position.current) return;
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
      {!config.devMode && <PointLockControls />}
      {/** @ts-ignore */}
      <mesh ref={ref}>
        <sphereBufferGeometry />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </>
  );
};

export default Player;
