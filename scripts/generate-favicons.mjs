import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");

const sourceCandidates = [
  path.join(publicDir, "logo-des.png"),
  path.join(publicDir, "logo.png"),
  path.join(publicDir, "favicon-source.png"),
];

const source = sourceCandidates.find((candidate) => existsSync(candidate));

if (!source) {
  console.error("No logo source found. Expected public/logo-des.png");
  process.exit(1);
}

console.log(`Generating favicons from: ${path.relative(root, source)}`);

async function createIcon(size) {
  // Keep the full wide logo readable inside a square favicon on white.
  return sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
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

writeFileSync(path.join(publicDir, "favicon.png"), await createIcon(512));
writeFileSync(path.join(publicDir, "apple-touch-icon.png"), await createIcon(180));

const icoInputs = pngPaths.filter((p) => /favicon-(16|32|48)x/.test(p));
const icoBuffer = await pngToIco(icoInputs);

writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);

console.log("Favicons generated successfully from the main logo.");
