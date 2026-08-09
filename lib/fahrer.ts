import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const fahrerDirectory = path.join(process.cwd(), 'content/fahrer');

export interface FahrerData {
  slug: string;
  title: string;
  image?: string;
  discipline?: string;
  body?: string;
}

export function getSortedFahrerData(): FahrerData[] {
  if (!fs.existsSync(fahrerDirectory)) return [];
  
  const fileNames = fs.readdirSync(fahrerDirectory);
  const allFahrerData = fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(fahrerDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<FahrerData, 'slug' | 'body'>),
      body: matterResult.content, // Pass markdown content directly
    };
  });

  // Sort alphabetically
  return allFahrerData.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
}
