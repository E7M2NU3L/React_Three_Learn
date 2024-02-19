import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import { Canvas } from '@react-three/fiber';

function App() {

  // canvas handler
  const createCanvasHandler = (state) => {
    console.log(state.gl);
  }

return (
    <Canvas className='text-4xl flex justify-center items-center bg-gradient-to-tr from-purple-500 via-blue-500 to-violet-500 w-full h-full' style={{
      height: "100vh"}}
      gl={{
        antialias: false,
        alpha: true
      }}
      orthographiccamera={{
        fov: 45,
        near: 1,
        far: 1000,
        position: [2,2,5],
        zoom: 12
      }}
      onCreated={
        createCanvasHandler
      }
      >
    <Home />
    </Canvas>
  );
}

export default App;
