export enum Planets {
  SUN,
  MERCURY,
  VENUS,
  EARTH,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
}

export interface Planet {
  name: string;
  type: string;
  mass: string;
  diameter: string;
  luminosity: string | null;
  temperature: string | null;
  age: string | null;
  apoapsis: string | null;
  periapsis: string | null;
  eccentrity: string | null;
  orbitPeriod: string | null;
  moons: string | null;
}
