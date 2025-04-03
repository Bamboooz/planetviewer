interface PlanetModelDisplayProps {
  planetModel: string;
}

export default function PlanetModelDisplay({
  planetModel,
}: PlanetModelDisplayProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={planetModel} />
    </div>
  );
}
