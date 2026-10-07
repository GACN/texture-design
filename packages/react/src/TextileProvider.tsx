import React, { createContext } from "react";

export interface ProviderProps {
  quality?: "auto" | "high" | "low";
  reducedMotion?: "system" | "on" | "off";
  renderer?: "auto" | "css" | "canvas" | "webgl";
  children: React.ReactNode;
}
export const TextileContext = createContext<Required<Omit<ProviderProps, "children">>>({
  quality: "auto", reducedMotion: "system", renderer: "auto",
});
export function TextileProvider({ quality = "auto", reducedMotion = "system", renderer = "auto", children }: ProviderProps) {
  return <TextileContext.Provider value={{ quality, reducedMotion, renderer }}>{children}</TextileContext.Provider>;
}
