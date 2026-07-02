import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public", "favicon-source.png");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");

async function createIcon(size) {
  const logoSize = Math.round(size * 0.82);

  const logo = await sharp(source)
    .resize(logoSize, logoSize, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: "#ffffff",
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

mkdirSync(publicDir, { recursive: true });

const sizes = [16, 32, 48, 180, 192, 512];
const pngPaths = [];

for (const size of sizes) {
  const buffer = await createIcon(size);
  const filename = `favicon-${size}x${size}.png`;
  const filepath = path.join(publicDir, filename);
  writeFileSync(filepath, buffer);
  pngPaths.push(filepath);
}

const favicon512 = await createIcon(512);
writeFileSync(path.join(publicDir, "favicon.png"), favicon512);
writeFileSync(path.join(publicDir, "apple-touch-icon.png"), await createIcon(180));

const icoInputs = pngPaths.filter((p) => /favicon-(16|32|48)x/.test(p));
const icoPath = path.join(publicDir, "favicon.ico");
const icoBuffer = await pngToIco(icoInputs);

writeFileSync(icoPath, icoBuffer);
writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);

console.log("Favicons generated successfully.");
