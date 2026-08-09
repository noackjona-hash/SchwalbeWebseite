import sharp from 'sharp';

async function check() {
  const meta = await sharp('public/images/Amateure1.webp').metadata();
  const { data, info } = await sharp('public/images/Amateure1.webp').raw().toBuffer({ resolveWithObject: true });
  
  // check top left pixel
  const r = data[0];
  const g = data[1];
  const b = data[2];
  console.log(`Top left pixel: RGB(${r}, ${g}, ${b})`);
}

check();
