import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components'
import { meshStandardMaterial } from 'three';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const TestThree = () => {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <mesh>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial color="red">
                    <RenderTexture attach="map">
                        <PerspectiveCamera 
                        makeDefault
                        position={[0,0,2]}
                        />
                        <color attach="background" args={["pink"]} />
                        <Text fontSize={3} color="#555">
                            Hello
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </mesh>
        </Canvas>
    </Container>
  )
}
