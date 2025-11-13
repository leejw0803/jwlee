import { Component, Lib } from '@/app/_shared';

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const { id } = await params;

  const staticTree = await Lib.Notion.getStaticNotionBlocks(id, 'projects');
  const hydrated = await Lib.Notion.injectFreshImageUrls(staticTree);

  const title = hydrated.child_page?.title ?? 'Untitled';

  return (
    <div className="max-w-3xl mx-auto py-12">
      <Component.Module.NotionRenderer blocks={hydrated.children ?? []} title={title} />
    </div>
  );
}
