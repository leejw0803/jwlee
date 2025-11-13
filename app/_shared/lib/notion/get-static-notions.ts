import path from 'path';
import fs from 'fs';

type NotionDBType = 'projects' | 'resume';

export async function getStaticNotionBlocks(pageId: string, dbType: NotionDBType) {
  const filePath = path.resolve(process.cwd(), `notion-data/${dbType}`, `${pageId}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Notion block file not found: ${filePath}`);
  }

  const file = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(file);
}
