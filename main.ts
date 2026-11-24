import fs from "node:fs";
import path from "node:path";

// Entry text for make.fun bounty: Fortune in a Pot (103 characters)
const PLANT_FORTUNE_ENTRY =
  "A kind hand will rotate your saucer ninety degrees today, giving your quiet side its turn in the light.";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "entry.txt"), PLANT_FORTUNE_ENTRY + "\n", "utf8");
