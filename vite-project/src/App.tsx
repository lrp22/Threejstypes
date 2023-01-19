import {
  PresentationControls,
  Center,
  useHelper,
  Grid,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "./Room";
import { useRef } from "react";
import * as THREE from "three";

function Lights() {
  const spotlight = useRef<THREE.SpotLight>(null!);
  useHelper(spotlight, THREE.SpotLightHelper, "cyan");
  const pointlight = useRef<THREE.PointLight>(null!);
  useHelper(pointlight, THREE.PointLightHelper, 1, "red");
  return (
    <group>
      {/*  <spotLight
        ref={spotlight}
        intensity={0.8}
        position={[0, 5, 0]}
        castShadow={true}
      /> */}
      <pointLight ref={pointlight} position={[0, 4, 0]} castShadow />
      {/* <ContactShadows
        opacity={1}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      /> */}
    </group>
  );
}

function ThreeScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 4] }}>
      <Center>
        {/*  <Grid args={[10, 10]} sectionSize={1} /> */}
        <Lights />
        <Room scale={0.956} />
        <OrbitControls />
        {/* <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
        </PresentationControls> */}
      </Center>
    </Canvas>
  );
}

function App() {
  return (
    <div className="overflow-hidden h-screen m-0">
      <ThreeScene />
    </div>
  );
}

export default App;
