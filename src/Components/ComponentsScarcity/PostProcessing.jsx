import { EffectComposer } from "@react-three/postprocessing";
import {BrightnessContrast,GodRays } from '@react-three/postprocessing';


const PostProcessing = () => {
    return (
        <EffectComposer>
            <BrightnessContrast brightness={-0.1} contrast={-0.10} />
        </EffectComposer>

    );
};
export default PostProcessing;