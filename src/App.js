import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Cubes } from './components/Cubes';
import { Player } from './components/Player';
import { FPV } from './components/FPV';

function App() {
  return (
    <>
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <FPV />
      <Physics >
        <Ground />
        <Cubes />
        <Player />
      </Physics>
    </Canvas>
    <div className="absolute cursor centered">+</div>
    </>
  );
}

export default App;
