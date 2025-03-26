import { useState, useEffect } from "react";
import { Planets, Planet } from "../types";
import { planetMap } from "../const";
import PlanetInfoItem from "./PlanetInfoItem";

interface PlanetDisplayProps {
  planet: Planets;
}

export default function PlanetDisplay({ planet }: PlanetDisplayProps) {
  const [planetData, setPlanetData] = useState<Planet | null>(null);

  useEffect(() => {
    setPlanetData(planetMap[planet]);
  }, [planet]);

  return (
    <div className="w-full h-full p-[50px]">
      <div className="w-full h-full flex border-2 border-secondary rounded-xl">
        <div className="w-full h-full flex flex-col">
          <PlanetInfoItem name="Planeta" value={planetData?.name} />
          <PlanetInfoItem name="Masa" value={planetData?.mass} />
          <PlanetInfoItem name="Średnica" value={planetData?.diameter} />

          {planetData?.luminosity &&
            <PlanetInfoItem name="Jasność absolutna" value={planetData?.luminosity} />
          }

          {planetData?.temperature &&
            <PlanetInfoItem name="Temperatura" value={planetData?.temperature} />
          }

          {planetData?.age &&
            <PlanetInfoItem name="Wiek" value={planetData?.age} />
          }

          {planetData?.apoapsis &&
            <PlanetInfoItem name="Apocentrum" value={planetData?.apoapsis} />
          }

          {planetData?.periapsis &&
            <PlanetInfoItem name="Perycentrum" value={planetData?.periapsis} />
          }

          {planetData?.eccentrity &&
            <PlanetInfoItem name="Mimośród" value={planetData?.eccentrity} />
          }

          {planetData?.sunDistance &&
            <PlanetInfoItem name="Odległość od Słońca" value={planetData?.sunDistance} />
          }

          {planetData?.orbitPeriod &&
            <PlanetInfoItem name="Okres orbity" value={planetData?.orbitPeriod} />
          }

          {planetData?.moons &&
            <PlanetInfoItem name="Księżyce" value={planetData?.moons} />
          }
        </div>

        <div className="w-[4px] h-full bg-secondary" />

        <div className="w-full h-full">
          
        </div>
      </div>
    </div>
  );
}
