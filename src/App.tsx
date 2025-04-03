import { useState, useEffect } from "react";
import { register } from "@tauri-apps/plugin-global-shortcut";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { Planets } from "./types";
import PlanetDisplay from "./components/PlanetDisplay";
import { keyMap } from "./const";
import Placeholder from "./components/Placeholder";

export default function App() {
  const [planet, setPlanet] = useState<Planets | null>(null);

  useEffect(() => {
    const registerShortcuts = async () => {
      await register("Esc", async () => {
        const appWindow = getCurrentWindow();

        await appWindow.close();
      });

      for (const key in keyMap) {
        await register(key, async () => {
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
