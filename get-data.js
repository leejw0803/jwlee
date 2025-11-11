import { Client } from '@notionhq/client';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';

// .env.local 경로 지정
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// export async function fetchNotionData() {
//   console.log(process.env.NOTION_API_SECRET_KEY, process.env.NOTION_RESUME_PAGE_ID)
// const notion = new Client({ auth: process.env.NOTION_API_SECRET_KEY });
// const pageId = process.env.NOTION_RESUME_PAGE_ID;

// const blocks = await notion.blocks.children.list({ block_id: pageId });
// console.log(blocks.results.length)
// fs.writeFileSync("data/resume.json", JSON.stringify(blocks.results, null, 2));
//   console.log("✅ Notion 데이터 가져오기 완료!");
// }

// // 실행
// fetchNotionData();
// import { Client } from "@notionhq/client";
// import fs from "fs";
// import "dotenv/config";

const notion = new Client({ auth: process.env.NOTION_API_SECRET_KEY });

async function getBlocksRecursively(blockId) {
  const blocks = [];
  let cursor;

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });
    blocks.push(...response.results);
    cursor = response.next_cursor;
  } while (cursor);

  // ✅ children 재귀적으로 불러오기
  for (const block of blocks) {
    if (block.has_children) {
      const children = await getBlocksRecursively(block.id);
      block.children = children;
    }
  }

  return blocks;
}

async function main() {
  const pageId = process.env.NOTION_RESUME_PAGE_ID;
  const blocks = await getBlocksRecursively(pageId);
  blocks
    .filter((b) => b.type === 'paragraph')
    .forEach((b) => {
      console.log(b.paragraph.rich_text);
    });
  fs.writeFileSync('data/resume.json', JSON.stringify(blocks, null, 2));
  console.log('✅ Notion 데이터 저장 완료!');
}

main();
