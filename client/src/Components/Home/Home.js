import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react'; 
import { AxesHelper, BoxGeometry, ConeGeometry, GridHelper, MeshNormalMaterial, PlaneGeometry, RingGeometry, TorusKnotGeometry } from 'three';
import { OrbitControls } from '@react-three/drei';
import About from '../About/About';
// Importing Box and MeshNormalMaterial components from @react-three/fiber

const Home = () => {

    // creating the referneces
    const TorusRef = useRef();
    const ConeRef = useRef();
    const RingRef = useRef();

    // Three Frames
    const {gl, camera} = useThree();

    // Animations
    useFrame((state, delta) => {
        TorusRef.current.rotation.x += delta;
        TorusRef.current.rotation.y += delta;
        TorusRef.current.rotation.z += delta;

        ConeRef.current.rotation.x += delta;
        ConeRef.current.rotation.y += delta;
        ConeRef.current.rotation.z += delta;

        RingRef.current.rotation.x += delta;
        RingRef.current.rotation.y += delta;
        RingRef.current.rotation.z += delta;

        // state.camera.position.x = Math.sin();

    })

    return (
    
        <>
            <OrbitControls />
            <About />
            <mesh ref={TorusRef} position={[1,1,1]} rotation={[0.3, 0.5, 0.2]} scale={[0.7, 0.7, 0.7]} geometry={new ConeGeometry()} material={new MeshNormalMaterial()} helper = {new GridHelper(5, 20, 0x00ff00ff)} />

            <mesh ref={RingRef} position={[2,2,2]} rotation={[0.2, 0.4, 0.2]} scale={[2,2,2]} geometry={new PlaneGeometry()} material={new MeshNormalMaterial()} /> 
            
            <mesh position={[-1,0,-2]} ref={ConeRef} rotation={[0.6, 0.6, 0.6]} scale={[1,1,1]} geometry={new TorusKnotGeometry()} material={new MeshNormalMaterial()} />            
        </>
    
    );
};

export default Home;
