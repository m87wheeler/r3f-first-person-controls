import * as React from "react";

interface Props {}

const Instructions: React.FC<Props> = () => {
  return (
    <>
      <div className="basic-controls">
        <span>W</span>
        <span>A</span>
        <span>S</span>
        <span>D</span>
        <span>Space</span>
      </div>
      <div className="instructions">
        <p>Use the WASD keys to move</p>
        <p>Use space to jump</p>
        <p>Click the window and use your mouse to look around</p>
      </div>
    </>
  );
};

export default Instructions;
