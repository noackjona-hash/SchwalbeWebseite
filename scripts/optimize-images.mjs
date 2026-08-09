import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

const MAX_WIDTH = 1920;

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
      const inputPath = path.join(imagesDir, file);
      const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
      const outputPath = path.join(imagesDir, outputName);

      if (fs.existsSync(outputPath)) {
        console.log(`Skipping ${file}, ${outputName} already exists.`);
        continue;
      }

      console.log(`Processing ${file}...`);
      try {
        await sharp(inputPath)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Converted ${file} to ${outputName}`);
        
        // Remove original to save space and force webp usage
        fs.unlinkSync(inputPath);
        console.log(`Deleted original ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

optimizeImages();
