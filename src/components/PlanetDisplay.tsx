import { useState, useEffect } from "react";
import { Planets, Planet } from "../types";
import { modelMap, planetMap, soundMap } from "../const";
import PlanetInfoDisplay from "./PlanetInfoDisplay";
import PlanetModelDisplay from "./PlanetModelDisplay";
import PlanetSoundPlayer from "./PlanetSoundPlayer";

interface PlanetDisplayProps {
  planet: Planets;
}

export default function PlanetDisplay({ planet }: PlanetDisplayProps) {
  const [planetData, setPlanetData] = useState<Planet | null>(null);
  const [planetModel, setPlanetModel] = useState<string | null>(null);
  const [planetSound, setPlanetSound] = useState<string | null>(null);

  useEffect(() => {
    setPlanetData(planetMap[planet]);
    setPlanetModel(modelMap[planet]);
    setPlanetSound(soundMap[planet]);
  }, [planet]);

  return (
    <>
      {planetSound && <PlanetSoundPlayer planetSound={planetSound} />}

      <div className="w-full h-full p-[50px]">
        <div className="w-full h-full flex border-2 border-secondary rounded-xl">
          {planetData && <PlanetInfoDisplay planetData={planetData} />}

          <div className="w-[4px] h-full bg-secondary" />

          {planetModel && <PlanetModelDisplay planetModel={planetModel} />}
        </div>
      </div>
    </>
  );
}
