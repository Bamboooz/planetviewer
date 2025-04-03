import { Planet } from "../types";
import PlanetInfoItem from "./PlanetInfoItem";

interface PlanetInfoDisplayProps {
  planetData: Planet;
}

export default function PlanetInfoDisplay({
  planetData,
}: PlanetInfoDisplayProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <PlanetInfoItem name="Objekt" value={planetData?.name} />
      <PlanetInfoItem name="Typ" value={planetData?.type} />
      <PlanetInfoItem name="Masa" value={planetData?.mass} />
      <PlanetInfoItem name="Średnica" value={planetData?.diameter} />

      {planetData?.luminosity && (
        <PlanetInfoItem
          name="Absolutna wielkość gwiazdowa"
          value={planetData?.luminosity}
        />
      )}

      {planetData?.temperature && (
        <PlanetInfoItem name="Temperatura" value={planetData?.temperature} />
      )}

      {planetData?.age && (
        <PlanetInfoItem name="Wiek" value={planetData?.age} />
      )}

      {planetData?.apoapsis && (
        <PlanetInfoItem name="Apocentrum" value={planetData?.apoapsis} />
      )}

      {planetData?.periapsis && (
        <PlanetInfoItem name="Perycentrum" value={planetData?.periapsis} />
      )}

      {planetData?.eccentrity && (
        <PlanetInfoItem name="Mimośród" value={planetData?.eccentrity} />
      )}

      {planetData?.orbitPeriod && (
        <PlanetInfoItem name="Okres orbity" value={planetData?.orbitPeriod} />
      )}

      {planetData?.moons && (
        <PlanetInfoItem name="Księżyce" value={planetData?.moons} />
      )}
    </div>
  );
}
