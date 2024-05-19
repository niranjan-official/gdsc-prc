import React, { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
  type: 'grid' | 'dot';
  shadow?: boolean;
}

export function Background({ children, type, shadow }: BackgroundProps) {
  return (
    <div
      className={`w-full h-full dark:bg-${type}-white/[0.2] bg-${type}-black/[0.2] relative flex flex-col items-center justify-center`}
    >
      {/* Radial gradient for the container to give a faded look */}
      {shadow && (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}
      {children}
    </div>
  );
}
