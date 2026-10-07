import React from "react";
import type { TextileMaterial } from "../../material-core/src/types";

export interface CardProps {
  material?: TextileMaterial;
  weave?: "plain" | "twill" | "satin" | "basket" | "mesh" | "knit";
  tension?: "low" | "medium" | "high";
  interactive?: boolean;
  children: React.ReactNode;
}
/** v0.1: a card is "a piece of fabric fixed into the interface" (ch.9). */
export function TextileCard({ material = "cotton", weave = "plain", tension = "medium", interactive = false, children }: CardProps) {
  return (
    <div className="tx-card" data-material={material} data-weave={weave} data-tension={tension} data-interactive={interactive}>
      {children}
    </div>
  );
}
