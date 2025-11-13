import { Component, Lib } from '@/app/_shared';

export default async function Home() {
  const pageId = process.env.NOTION_RESUME_PAGE_ID!;
  const staticTree = await Lib.Notion.getStaticNotionBlocks(pageId, 'resume');

  const title = staticTree.child_page?.title ?? 'Untitled';
  return (
    <div className="w-full">
      <Component.Module.NotionRenderer blocks={staticTree.children ?? []} title={title} />
    </div>
  );
}
