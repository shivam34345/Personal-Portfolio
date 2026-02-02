import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const StarField = () => {
    const ref = useRef()

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Stars
                ref={ref}
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
        </group>
    )
}

export default StarField
