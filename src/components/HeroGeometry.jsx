import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'

export const HeroGeometry = (props) => {
    const meshRef = useRef()
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Rotate constantly
            meshRef.current.rotation.y += delta * 0.2

            // Floating motion
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2

            if (hovered) {
                meshRef.current.rotation.x += delta * 0.5
                meshRef.current.rotation.y += delta * 0.5
            }
        }
    })

    return (
        <Icosahedron
            args={[1.5, 0]} // radius, detail
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            {...props}
        >
            <meshStandardMaterial
                color={hovered ? "#7D5FFF" : "#4a90e2"}
                wireframe
                emissive={hovered ? "#7D5FFF" : "#000"}
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.8}
            />
        </Icosahedron>
    )
}
