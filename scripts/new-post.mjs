import fs from 'fs';
import path from 'path';

// Get title from command line arguments
const title = process.argv.slice(2).join(' ');

if (!title) {
  console.error('Bitte einen Titel angeben: node scripts/new-post.mjs "Mein cooler Titel"');
  process.exit(1);
}

// Generate a URL-friendly slug
const slug = title
  .toLowerCase()
  .replace(/ä/g, 'ae')
  .replace(/ö/g, 'oe')
  .replace(/ü/g, 'ue')
  .replace(/ß/g, 'ss')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '');

const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const filename = `${slug}.md`; // Decap CMS often just uses slug, we'll keep it simple
const filepath = path.join(process.cwd(), 'content', 'posts', filename);

if (fs.existsSync(filepath)) {
  console.error(`Fehler: Die Datei ${filename} existiert bereits.`);
  process.exit(1);
}

const content = `---
title: "${title}"
date: "${date}"
author: "Vorstand"
image: ""
excerpt: "Eine kurze Beschreibung für die Startseite..."
---

Hier kommt der Text des Artikels hin...
`;

fs.writeFileSync(filepath, content, 'utf8');
console.log(`✅ Erfolgreich erstellt: content/posts/${filename}`);
console.log(`Du kannst sie jetzt bearbeiten!`);
