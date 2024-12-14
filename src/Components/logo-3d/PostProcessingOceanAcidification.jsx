import { EffectComposer, GodRays, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const PostProcessingOceanAcidification = () => {
  return (
    <EffectComposer>
      <Vignette
        offset={0.5}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.DST}
      />
    </EffectComposer>
  );
};

export default PostProcessingOceanAcidification;
