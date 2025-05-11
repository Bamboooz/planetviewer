interface PlanetModelDisplayProps {
  planetModel: string;
}

export default function PlanetModelDisplay({
  planetModel,
}: PlanetModelDisplayProps) {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <img className="w-[80%] h-[80%]" src={planetModel} />
    </div>
  );
}
