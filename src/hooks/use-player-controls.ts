import * as React from "react";

interface IKeys {
  [key: string]: string;
}

function moveFieldByKey(key: string) {
  const keys: IKeys = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    ArrowRight: "rotateClockwise",
    ArrowLeft: "rotateAntiClockwise",
  };
  return keys[key];
}

export const usePlayerControls = () => {
  const [movement, setMovement] = React.useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    rotateClockwise: false,
    rotateAntiClockwise: false,
  });

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(e.code)]: true,
      }));
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(e.code)]: false,
      }));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
};
