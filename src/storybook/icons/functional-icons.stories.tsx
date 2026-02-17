import * as RadixIcons from "@radix-ui/react-icons";
import type React from "react";

export default {
  title: "Icons/Radix",
  parameters: {
    layout: "fullscreen",
  },
};

export const AllRadixIcons = () => {
  const allIconNames = Object.keys(RadixIcons).filter((name) =>
    name.endsWith("Icon"),
  );
  console.log("Number of Radix icons:", allIconNames.length);
  return (
    <div style={{ margin: "2rem" }}>
      <h1>{`All Radix Icons (${allIconNames.length})`}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(124px, 1fr))",
          gap: "2rem",
          padding: "2rem",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {allIconNames.map((name) => {
          const Icon = RadixIcons[
            name as keyof typeof RadixIcons
          ] as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>;
          return (
            <div key={name} style={{ textAlign: "center" }}>
              <Icon width={32} height={32} color="var(--mox-color-primary)" />
              <div style={{ marginTop: "0.5rem", fontSize: "0.85em" }}>
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
