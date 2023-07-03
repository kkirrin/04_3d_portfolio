import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from '@react-three/fiber'
import {  OrbitControls, Preload, useGLTF } from  '@react-three/drei'

import CanvasLoader from '../Loader'
import { HemisphereLight } from "three"

const Computers = ( isMobile ) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  

  return (
    <mesh>
      <hemisphereLight
        intensity={0.1}
        groundColor='black'
        >
        <pointLight
          intensity={1}>
        </pointLight>

        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={ isMobile ? [0, -3, -2.2 ] : [0, -3.25, -1.5]}
          >
        </primitive>     

        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          // intensity={1}
          castShadow
          // shadow-mapSize={1024}
          >

        </spotLight>

        <ambientLight 
          color="violet" 
          position={[0.1,0.1,0.1]} 
          intensity={0.5}
         /> 
      </hemisphereLight>
    </mesh>
  )
}
 const ComputersCanvas = () => {

  const [ isMobile, setIsMobile ] = useState(false)
  
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia(
    '(max-width: 500px)');
    
    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQuaryChange = (event) => {
      setIsMobile(event.matches)
    }
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQuaryChange)
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQuaryChange)
    }
  }, [])
  
  return (
    
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position : [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
    
  )
}
export default ComputersCanvas 