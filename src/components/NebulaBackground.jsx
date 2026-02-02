import { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const NebulaBackground = () => {
    const meshRef = useRef()
    const texture = useTexture('/nebula-bg.png')
    const { viewport } = useThree()

    // Logic to simulate "background-size: cover"
    // The texture aspect ratio matches the image we generated? 
    // We assume the image is roughly square or landscape. Let's force it to cover.
    // Ideally we'd know image dimensions, but scaling max(width, height) works for approximation

    // Actually, we can just scale carefully.
    // But strictly, let's just ensure it fills the screen.

    useEffect(() => {
        const handleScroll = () => {
            if (!meshRef.current) return

            const scrollY = window.scrollY
            const height = window.innerHeight

            // Keep opacity at 1.0 for the entire Home section (first 100vh)
            // Start fading ONLY after scrolling past 80% of the view
            let opacity = 1
            if (scrollY > height * 0.8) {
                // Fade out over the next 50% of screen height
                opacity = 1 - ((scrollY - height * 0.8) / (height * 0.5))
            }

            if (meshRef.current.material) {
                meshRef.current.material.opacity = Math.max(0, opacity)
                meshRef.current.visible = opacity > 0
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <mesh ref={meshRef} position={[0, 0, -5]}>
            {/* 
         Scale logic: render a plane that covers the viewport. 
         viewport.width/height is the size of the visible canvas in 3D units at z=0 (or wherever camera looks).
         If plane is at z=-5, and camera is at z=5 (total dist 10), we need to scale up.
         
         However, simpler method: use Drei's <ScreenQuad> or just direct viewport scaling if using default camera?
         Wait, we are putting this INSIDE the canvas which is fixed.
         The viewport prop from useThree gives us the width/height at distance 0 from camera.
         Our plane is at z=-5.
         
         Distance factor = (camera.z - object.z) / camera.z = (5 - (-5))/5 = 2.
         So we need to scale viewport by 2 to cover the background at z=-5.
      */}
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
                map={texture}
                transparent
                opacity={1}
                depthWrite={false}
                toneMapped={false}
            />
        </mesh>
    )
}

// Separate component to handle the responsive scaling using hooks
const NebulaPlane = () => {
    const { viewport, camera } = useThree()
    const meshRef = useRef()

    useFrame(() => {
        // Calculate distance scaling to ensuring full coverage
        // Camera z=5, Plane z=-5. Total dist = 10.
        // Viewport is calculated at z=0.
        // Scale factor = distance / camera.z ? No, basic trig.
        // Actually, easiest is to use `viewport.getCurrentViewport` if needed, 
        // OR just put the plane attached to the camera? No, we want parallax maybe?
        // User said "cover the entire page". Fixed bg is best.

        // Let's just scale based on viewport width/height assuming z=0 for simplicity, 
        // OR adjust position to z=0 and use renderOrder.
        // Let's move to z=0 (behind stars? Stars are at radius 100).
        // If we put this at z=-100, it's behind everything.
    })

    // Let's place it at z=-10 for depth, but scale it to cover.
    const distance = 15 // Camera at 5, object at -10
    const vHeight = 2 * Math.tan((75 / 2) * Math.PI / 180) * distance
    const vWidth = vHeight * viewport.aspect

    return (
        <mesh position={[0, 0, -10]} scale={[vWidth, vHeight, 1]}>
            <planeGeometry />
            <NebulaMaterial />
        </mesh>
    )

}

const NebulaMaterial = () => {
    const texture = useTexture('/nebula-bg.png')
    const meshRef = useRef()

    // Apply scroll logic to the material opacity directly
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const height = window.innerHeight

            // Stay fully opaque until we scroll just past the halfway point of the first section
            // Fade out completely by the time we hit the second section
            const startFade = height * 0.5
            const endFade = height * 1.5

            let alpha = 1
            if (scrollY > startFade) {
                alpha = 1 - (scrollY - startFade) / (endFade - startFade)
            }

            if (meshRef.current) {
                meshRef.current.opacity = Math.max(0, alpha)
            }
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll() // init
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <meshBasicMaterial
            ref={meshRef}
            map={texture}
            transparent
            opacity={1}
            depthWrite={false}
            toneMapped={false}
        />
    )
}

export default NebulaPlane // Exporting the wrapper
