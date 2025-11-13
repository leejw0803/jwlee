import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_API_SECRET_KEY,
  notionVersion: '2025-09-03',
});

export * from './throttled-fetch-data';
export * from './get-block-tree';
export * from './get-page-list';
export * from './get-page-title';
export * from './get-static-notions';
export * from './inject-image';
