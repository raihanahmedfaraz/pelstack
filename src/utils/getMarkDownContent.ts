import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const getMarkDownContent = (folder: string, slug: string) => {
  // Normalize inputs
  const decodedSlug = decodeURIComponent(slug);
  const sanitizedFolder = folder.endsWith(path.sep) || folder.endsWith('/') ? folder : `${folder}/`;

  // Attempt 1: Direct match (expected for URL-safe slugs)
  const directPath = path.join(sanitizedFolder, `${decodedSlug}.md`);
  if (fs.existsSync(directPath)) {
    const content = fs.readFileSync(directPath, 'utf8');
    return matter(content);
  }

  // Attempt 2: Fallback to filename lookup in folder by slugifying filenames
  if (!fs.existsSync(sanitizedFolder)) {
    throw new Error(`Markdown folder not found: ${sanitizedFolder}`);
  }

  const files = fs.readdirSync(sanitizedFolder).filter((f) => f.endsWith('.md'));
  const toSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/\.[^/.]+$/, '')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  const match = files.find((f) => toSlug(f) === decodedSlug.toLowerCase());

  if (match) {
    const filePath = path.join(sanitizedFolder, match);
    const content = fs.readFileSync(filePath, 'utf8');
    return matter(content);
  }

  const available = files.map((f) => `- ${f} -> ${toSlug(f)}`).join('\n');
  throw new Error(
    `Markdown file not found for slug "${decodedSlug}" in ${sanitizedFolder}.\n` +
      `Tried: ${directPath}\nAvailable files and derived slugs:\n${available}`,
  );
};

export default getMarkDownContent;
