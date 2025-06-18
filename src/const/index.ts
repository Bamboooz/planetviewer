import { Planet, Planets } from "../types";

import sunModel from "../assets/model/sun.png";
import mercuryModel from "../assets/model/mercury.png";
import venusModel from "../assets/model/venus.png";
import earthModel from "../assets/model/earth.png";
import marsModel from "../assets/model/mars.png";
import jupiterModel from "../assets/model/jupiter.png";
import saturnModel from "../assets/model/saturn.png";
import uranusModel from "../assets/model/uranus.png";
import neptuneModel from "../assets/model/neptune.png";

import sunSound from "../assets/audio/sun.mp3";
import mercurySound from "../assets/audio/mercury.mp3";
import venusSound from "../assets/audio/venus.mp3";
import earthSound from "../assets/audio/earth.mp3";
import marsSound from "../assets/audio/mars.mp3";
import jupiterSound from "../assets/audio/jupiter.mp3";
import saturnSound from "../assets/audio/saturn.mp3";
import uranusSound from "../assets/audio/uranus.mp3";
import neptuneSound from "../assets/audio/neptune.mp3";

export const keyMap: Record<string, Planets> = {
  Numpad1: Planets.SUN,
  Numpad2: Planets.MERCURY,
  Numpad3: Planets.VENUS,
  Numpad4: Planets.EARTH,
  Numpad5: Planets.MARS,
  Numpad6: Planets.JUPITER,
  Numpad7: Planets.SATURN,
  Numpad8: Planets.URANUS,
  Numpad9: Planets.NEPTUNE,
};

export const modelMap: Record<Planets, string> = {
  [Planets.SUN]: sunModel,
  [Planets.MERCURY]: mercuryModel,
  [Planets.VENUS]: venusModel,
  [Planets.EARTH]: earthModel,
  [Planets.MARS]: marsModel,
  [Planets.JUPITER]: jupiterModel,
  [Planets.SATURN]: saturnModel,
  [Planets.URANUS]: uranusModel,
  [Planets.NEPTUNE]: neptuneModel,
};

export const soundMap: Record<Planets, string> = {
  [Planets.SUN]: sunSound,
  [Planets.MERCURY]: mercurySound,
  [Planets.VENUS]: venusSound,
  [Planets.EARTH]: earthSound,
  [Planets.MARS]: marsSound,
  [Planets.JUPITER]: jupiterSound,
  [Planets.SATURN]: saturnSound,
  [Planets.URANUS]: uranusSound,
  [Planets.NEPTUNE]: neptuneSound,
};

export const planetMap: Record<Planets, Planet> = {
  [Planets.SUN]: {
    name: "Słońce",
    type: "Żółty karzeł",
    mass: "1.989 x 10^30 kg",
    diameter: "1.3914 x 10^6 km",
    luminosity: "4.83",
    temperature: "5,778 K (5498.85 C)",
    age: "4.6 miliarda lat",
    apoapsis: null,
    periapsis: null,
    eccentrity: null,
    orbitPeriod: null,
    moons: null,
  },
  [Planets.MERCURY]: {
    name: "Merkury",
    type: "Skalista",
    mass: "0.330 x 10^24 kg",
    diameter: "4879 km",
    luminosity: null,
    temperature: null,
    age: null,
    apoapsis: "6.98 x 10^7 km",
    periapsis: "4.60 x 10^7 km",
    eccentrity: "0.206",
    orbitPeriod: "88.0 dni",
    moons: "0",
  },
  [Planets.VENUS]: {
    name: "Wenus",
    type: "Skalista",
    mass: "4.87 x 10^24 kg",
    diameter: "12104 km",
    luminosity: null,
    temperature: null,
    age: null,
    apoapsis: "1.089 x 10^8 km",
    periapsis: "1.075 x 10^8 km",
    eccentrity: "0.007",
    orbitPeriod: "224.7 dni",
    moons: "0",
  },
  [Planets.EARTH]: {
    name: "Ziemia",
    type: "Skalista",
    mass: "5.97 x 10^24 kg",
    diameter: "12756 km",
    luminosity: null,
    temperature: null,
    age: null,
    apoapsis: "1.521 x 10^8 km",
    periapsis: "1.471 x 10^8 km",
    eccentrity: "0.017",
    orbitPeriod: "365.2 dni",
    moons: "1",
  },
  [Planets.MARS]: {
    name: "Mars",
    type: "Skalista",
    mass: "0.642 x 10^24 kg",
    diameter: "6792 km",
    luminosity: null,
    temperature: null,
    age: null,
    apoapsis: "2.493 x 10^8 km",
    periapsis: "2.067 x 10^8 km",
    eccentrity: "0.094",
    orbitPeriod: "687.0 dni",
    moons: "2",
  },
  [Planets.JUPITER]: {
    name: "Jowisz",
    type: "Gazowa",
    mass: "1.898 x 10^27 kg",
    diameter: "142984 km",
    luminosity: null,
    temperature: null,
    age: null,
    apoapsis: "8.164 x 10^8 km",
    periapsis: "7.406 x 10^8 km",
    eccentrity: "0.049",
    orbitPeriod: "4331 dni",
    moons: "95",
  },
  [Planets.SATURN]: {
    name: "Saturn",
    type: "Gazowa",
    mass: "5.68 x 10^26 kg",
    diameter: "120536 km",
    luminosity: null,
    temperature: null,
    age: null,
    apoapsis: "1.506 x 10^9 km",
    periapsis: "1.358 x 10^9 km",
    eccentrity: "0.052",
    orbitPeriod: "10747 dni",
    moons: "274",
  },
  [Planets.URANUS]: {
    name: "Uran",
    type: "Gazowa",
    mass: "8.68 x 10^25 kg",
    diameter: "51118 km",
    luminosity: null,
    temperature: null,
    age: null,
    apoapsis: "3.001 x 10^9 km",
    periapsis: "2.732 x 10^9 km",
    eccentrity: "0.047",
    orbitPeriod: "30589 dni",
    moons: "28",
  },
  [Planets.NEPTUNE]: {
    name: "Neptun",
    type: "Gazowa",
    mass: "1.02 x 10^26 kg",
    diameter: "49528 km",
    luminosity: null,
    temperature: null,
    age: null,
    apoapsis: "4.558 x 10^9 km",
    periapsis: "4.471 x 10^9 km",
    eccentrity: "0.010",
    orbitPeriod: "59800 dni",
    moons: "16",
  },
};
