import { useState, useEffect } from "react";
import { register } from "@tauri-apps/plugin-global-shortcut";
import { invoke } from "@tauri-apps/api/core";
import PlanetDisplay from "./components/PlanetDisplay";
import Placeholder from "./components/Placeholder";
import { keyMap } from "./const";
import { Planets } from "./types";

export default function App() {
  const [planet, setPlanet] = useState<Planets | null>(null);

  useEffect(() => {
    const registerShortcuts = async () => {
      for (const key in keyMap) {
        await register(key, async () => {
          await invoke("send_udp_broadcast", { id: key });

          setPlanet(keyMap[key]);
        });
      }
    };

    registerShortcuts();
  }, []);

  return (
    <div className="w-screen h-screen">
      {planet !== null ? <PlanetDisplay planet={planet} /> : <Placeholder />}
    </div>
  );
}
