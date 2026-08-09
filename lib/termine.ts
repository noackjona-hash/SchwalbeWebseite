import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const termineDirectory = path.join(process.cwd(), 'content/termine');

export interface TerminData {
  slug: string;
  title: string;
  date: string;
  category: string;
  location?: string;
  link?: string;
  contentHtml?: string;
}

export function getSortedTermineData(): TerminData[] {
  if (!fs.existsSync(termineDirectory)) return [];
  
  const fileNames = fs.readdirSync(termineDirectory);
  const allTermineData = fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(termineDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const data = { ...matterResult.data };
    if (data.date instanceof Date) {
      data.date = data.date.toISOString().split('T')[0];
    }

    return {
      slug,
      ...(data as Omit<TerminData, 'slug' | 'contentHtml'>)
    };
  });

  return allTermineData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
