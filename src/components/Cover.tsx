import { useState, useEffect, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useThemeStore } from "@/stores/theme";
import { options } from "@/utils/particleOptions";
import { type Container, type Engine } from "tsparticles-engine";

export const Cover = () => {
  const [particlesContainer, setParticlesContainer] = useState<Container>();
  const theme = useThemeStore((state) => state.theme);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    setParticlesContainer(container);
    container?.loadTheme(theme);
  }, []);

  useEffect(() => {
    particlesContainer?.loadTheme(theme);
  }, [theme]);

  return (
    <div className="absolute">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};
