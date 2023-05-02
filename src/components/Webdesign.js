import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import Model from './Model'
import Internet from './Internet'
import { Canvas } from '@react-three/fiber'

const Webdesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
        <Model />
        <Internet />
        </Stage>
        <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Webdesign
