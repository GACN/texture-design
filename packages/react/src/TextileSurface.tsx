import React from "react";

export interface SurfaceProps {
  material?: string;
  physics?: { tension?: number; bending?: number; damping?: number };
  optics?: { sheen?: number; anisotropy?: number };
  children?: React.ReactNode;
}
export function TextileSurface({ material = "silk", physics, optics, children }: SurfaceProps) {
  const style = {
    "--tx-surface-tension": physics?.tension ?? 0.62,
    "--tx-surface-bending": physics?.bending ?? 0.21,
    "--tx-surface-sheen": optics?.sheen ?? 0.72,
  } as React.CSSProperties;
  return <div className="tx-surface" data-material={material} style={style}>{children}</div>;
}
