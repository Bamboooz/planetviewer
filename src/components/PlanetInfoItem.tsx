interface PlanetInfoItemProps {
  name: string;
  value: string | undefined;
}

export default function PlanetInfoItem({ name, value }: PlanetInfoItemProps) {
  return (
    <div className="w-full h-20 flex items-center justify-between px-6 border-b-2 border-secondary">
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
}
