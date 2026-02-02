import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import StarField from './StarField'
import NebulaBackground from './NebulaBackground'

const CanvasContainer = ({ children }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                dpr={[1, 2]} // Optimize for pixel density
                gl={{ antialias: true, alpha: false }}
            >
                <Suspense fallback={null}>
                    <color attach="background" args={['#0B0B15']} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />

                    <StarField />
                    <NebulaBackground />
                    {children}
                </Suspense>
            </Canvas>
        </div>
    )
}

export default CanvasContainer
