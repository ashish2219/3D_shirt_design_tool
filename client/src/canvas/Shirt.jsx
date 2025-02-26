// import React, { useRef } from 'react';
// import { useSnapshot } from 'valtio';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { TextureLoader } from 'three'; // Import TextureLoader from 'three'

// import state from '../store';

// const Shirt = () => {
//     const snap = useSnapshot(state);
//     const gltf = useLoader(GLTFLoader, '/shirt_baked.glb');
//     const logoTexture = useLoader(TextureLoader, snap.logoDecal); // Use TextureLoader directly
//     const fullTexture = useLoader(TextureLoader, snap.fullDecal); // Use TextureLoader directly

//     const meshRef = useRef();

//     return (
//         <group>
//             <mesh
//                 ref={meshRef}
//                 castShadow
//                 geometry={gltf.nodes.T_Shirt_male.geometry}
//             >
//                 <meshStandardMaterial
//                     map={fullTexture}
//                     roughness={1}
//                 // Add any other material properties here if needed
//                 />
//             </mesh>
//         </group>
//     );
// };

// export default Shirt;



import React from 'react'
import { easing, geometry } from 'maath';
import { useSnapshot } from 'valtio';
import { dispose, useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


import state from "../store";
import { stringify } from 'postcss';

const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF("/shirt_baked.glb")
    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                materialRoughness={1} // Corrected from material-roughness to materialRoughness
                dispose={null}
            >
                {snap.isFullTexture && (
                    <Decal
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                    />
                )}

                {snap.isLogoTexture && (
                    <Decal
                        position={[0, 0.04, 0.15]}
                        rotation={[0, 0, 0]}
                        scale={0.15}
                        map={logoTexture}
                        mapAnisotropy={16} // Corrected from map-anisotropy to mapAnisotropy
                        depthTest={false}
                        depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    );
}

export default Shirt;