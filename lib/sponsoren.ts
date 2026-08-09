import fs from 'fs';
import path from 'path';

const sponsorenFile = path.join(process.cwd(), 'content/settings/sponsoren.json');

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

export function getSponsors(): Sponsor[] {
  if (!fs.existsSync(sponsorenFile)) return [];
  
  try {
    const fileContents = fs.readFileSync(sponsorenFile, 'utf8');
    const data = JSON.parse(fileContents);
    return data.sponsors || [];
  } catch (error) {
    console.error('Error reading sponsoren.json:', error);
    return [];
  }
}
