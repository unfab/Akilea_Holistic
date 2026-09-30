import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { DEFAULT_OG_IMAGE } from "@/config/site";

export const alt = DEFAULT_OG_IMAGE.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const emblem = await readFile(join(process.cwd(), "public/images/brand/akilea-emblem.png"));
  const emblemSrc = `data:image/png;base64,${emblem.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F5",
          borderBottom: "16px solid #915296",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={emblemSrc} width={330} height={248} alt="" />
        <div
          style={{
            marginTop: 40,
            fontSize: 52,
            color: "#915296",
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          Holistični center & intuitivna masaža Koper
        </div>
      </div>
    ),
    size,
  );
}
