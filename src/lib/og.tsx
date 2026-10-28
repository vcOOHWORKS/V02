/* eslint-disable @next/next/no-img-element -- Satori (next/og) renders plain <img>; next/image does not apply here */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { motifs } from "@/lib/motifs";

// Share-image template (Open Graph / Twitter), drawn in the brand system.
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Assets don't depend on the request, so they are read once at module scope.
const [lexendLight, lexendRegular, logo] = await Promise.all([
  readFile(join(process.cwd(), "src/assets/fonts/Lexend-ExtraLight.ttf")),
  readFile(join(process.cwd(), "src/assets/fonts/Lexend-Regular.ttf")),
  readFile(join(process.cwd(), "public/brand/vo2-logo.png")),
]);
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
const lotusSrc = `data:image/svg+xml;base64,${Buffer.from(motifs.lotus("rgba(151,48,46,0.2)")).toString("base64")}`;

const heroTone = "linear-gradient(172deg,#2b1113 0%,#6b2422 38%,#b2453b 68%,#e8785a 90%,#f2956e 100%)";

type Input = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  subtitle?: string;
  tone?: string;
};

export function ogImage({ eyebrow, title, emphasis, subtitle, tone = heroTone }: Input) {
  const long = title.length + (emphasis?.length ?? 0) > 36;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#FCFAF8", fontFamily: "Lexend", position: "relative" }}>
        {/* Copy */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 720, padding: "64px 0 60px 72px" }}>
          <img src={logoSrc} width={156} height={52} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 18, letterSpacing: 5, textTransform: "uppercase", color: "#97302E", fontWeight: 400 }}>
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 22,
                fontSize: long ? 58 : 76,
                lineHeight: 1.04,
                fontWeight: 200,
                letterSpacing: -2,
                color: "#1E1314",
              }}
            >
              <span>{title}</span>
              {emphasis && <span style={{ color: "#97302E", fontWeight: 400 }}>{emphasis}</span>}
            </div>
            {subtitle && (
              <div style={{ display: "flex", marginTop: 24, fontSize: 24, lineHeight: 1.4, color: "#524F4E", fontWeight: 200, maxWidth: 600 }}>
                {subtitle}
              </div>
            )}
          </div>
          <div style={{ display: "flex", fontSize: 16, letterSpacing: 4, textTransform: "uppercase", color: "#524F4E" }}>
            vo2wellness.in · Bengaluru
          </div>
        </div>

        {/* Jharokha arch with a faint lotus behind it */}
        <div style={{ display: "flex", position: "absolute", right: -40, top: 40, width: 560, height: 560 }}>
          <img src={lotusSrc} width={560} height={560} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 96,
            bottom: 0,
            width: 330,
            height: 500,
            borderRadius: "165px 165px 0 0",
            backgroundImage: tone,
          }}
        />
        <div style={{ display: "flex", position: "absolute", left: 0, right: 0, bottom: 0, height: 10, background: "#97302E" }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Lexend", data: lexendLight, weight: 200, style: "normal" },
        { name: "Lexend", data: lexendRegular, weight: 400, style: "normal" },
      ],
    },
  );
}
