import * as React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import Floor from "../structure/floor/floor";
import Stairs from "../structure/stairs/stairs";
import Wall from "../structure/wall/wall";

interface Props {}

const Scene: React.FC<Props> = () => {
  const step = {
    height: 0.5,
    total: 15,
  };
  const [floorCMap, floorDMap, floorNMap, floorAoMap] = useTexture([
    "assets/materials/wood-floor/base-color.jpg",
    "assets/materials/wood-floor/height.png",
    "assets/materials/wood-floor/normal.jpg",
    "assets/materials/wood-floor/ambient-occlusion.jpg",
  ]);
  const [wallCMap, wallDMap, wallNMap, wallAoMap] = useTexture([
    "assets/materials/stone-walls/base-color.jpg",
    "assets/materials/stone-walls/height.png",
    "assets/materials/stone-walls/normal.jpg",
    "assets/materials/stone-walls/ambient-occlusion.jpg",
  ]);

  if (floorCMap) {
    floorCMap.wrapS = floorCMap.wrapT = THREE.RepeatWrapping;
    floorCMap.repeat.set(15, 15);
    floorCMap.anisotropy = 16;
  }
  if (wallCMap) {
    wallCMap.wrapS = wallCMap.wrapT = THREE.RepeatWrapping;
    wallCMap.repeat.set(4, 1);
  }

  return (
    <group>
      {/** GROUND FLOOR */}
      <Floor
        args={[40, 0.5, 40]}
        color="grey"
        map={floorCMap}
        displacementMap={floorDMap}
        normalMap={floorNMap}
        aoMap={floorAoMap}
        displacementScale={0.2}
      />
      {/** STAIRS */}
      <Stairs
        stepHeight={step.height}
        stepTotal={step.total}
        rise={0.25}
        color="grey"
      />
      {/** FIRST FLOOR */}
      <Floor
        args={[30, 0.5, 10]}
        position={[5, 8, 15]}
        color="grey"
        map={floorCMap}
        normalMap={floorNMap}
        aoMap={floorAoMap}
      />
      <Floor
        args={[30, 0.5, 10]}
        position={[15, 8, -5]}
        rotation={[0, Math.PI / 2, 0]}
        color="grey"
        map={floorCMap}
        normalMap={floorNMap}
        aoMap={floorAoMap}
      />
      <Floor
        args={[30, 0.5, 10]}
        position={[-5, 8, -15]}
        rotation={[0, 0, 0]}
        color="grey"
        map={floorCMap}
        normalMap={floorNMap}
        aoMap={floorAoMap}
      />
      <Floor
        args={[30, 0.5, 10]}
        position={[-15, 8, 5]}
        rotation={[0, Math.PI / 2, 0]}
        color="grey"
        map={floorCMap}
        normalMap={floorNMap}
        aoMap={floorAoMap}
      />
      {/** GROUND FLOOR WALLS */}
      <Wall
        args={[40, 7.5]}
        position={[0, 4, -20]}
        color="grey"
        map={wallCMap}
        displacementMap={wallDMap}
        normalMap={wallNMap}
        aoMap={wallAoMap}
        displacementScale={0.2}
      />
      <Wall
        args={[40, 7.5]}
        position={[0, 4, 20]}
        rotation={[0, Math.PI, 0]}
        color="grey"
        map={wallCMap}
        displacementMap={wallDMap}
        normalMap={wallNMap}
        aoMap={wallAoMap}
        displacementScale={0.2}
      />
      <Wall
        args={[40, 7.5]}
        position={[-20, 4, 0]}
        rotation={[0, Math.PI / 2, 0]}
        color="grey"
        map={wallCMap}
        displacementMap={wallDMap}
        normalMap={wallNMap}
        aoMap={wallAoMap}
        displacementScale={0.2}
      />
      <Wall
        args={[40, 7.5]}
        position={[20, 4, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        color="grey"
        map={wallCMap}
        displacementMap={wallDMap}
        normalMap={wallNMap}
        aoMap={wallAoMap}
        displacementScale={0.2}
      />
    </group>
  );
};

export default Scene;
