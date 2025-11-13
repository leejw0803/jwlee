import { Client } from '@notionhq/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const notion = new Client({
  auth: process.env.NOTION_API_SECRET_KEY,
  notionVersion: '2025-09-03',
});

// 🔥 Database → DataSource ID 가져오기
async function getDataSourceId(databaseId) {
  const db = await notion.databases.retrieve({ database_id: databaseId });
  const ds = db.data_sources?.[0];
  if (!ds) throw new Error('No data source found');
  return ds.id;
}

// 🔥 재귀적으로 block tree 가져오기
async function getBlocksRecursively(blockId) {
  const block = await notion.blocks.retrieve({ block_id: blockId });

  if (block.has_children) {
    const children = await notion.blocks.children.list({
      block_id: blockId,
    });

    block.children = await Promise.all(
      children.results.map(async (child) => {
        if (child.has_children) {
          return await getBlocksRecursively(child.id);
        }
        return child;
      })
    );
  }

  return block;
}

async function getProjects() {
  const databaseId = process.env.NOTION_API_PROJECTS_DB_ID;
  const dataSourceId = await getDataSourceId(databaseId);

  const res = await notion.dataSources.query({ data_source_id: dataSourceId });

  const outputPath = path.resolve(process.cwd(), 'notion-data/projects');
  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath, { recursive: true });

  for (const page of res.results) {
    const pageId = page.id;

    console.log(`📄 Projects 데이터를 가져옵니다... ${page.title} / ${pageId}: `);

    const tree = await getBlocksRecursively(pageId);

    // 🔥 개별 파일로 저장
    const filePath = path.join(outputPath, `${pageId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(tree, null, 2));

    console.log(`💾 ${page.title} 데이터 저장 완료!: ${filePath}`);
  }

  console.log('✨ 모든 프로젝트 데이터를 저장했습니다.');
}

async function getResume() {
  const pageId = process.env.NOTION_RESUME_PAGE_ID;
  const blocks = await getBlocksRecursively(pageId);

  const outputPath = path.resolve(process.cwd(), 'notion-data/resume');
  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath, { recursive: true });

  const filePath = path.join(outputPath, `${pageId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(blocks, null, 2));

  console.log('💾 Resume 데이터 저장 완료!');
}

async function main() {
  await getProjects();
  await getResume();
}

main();
