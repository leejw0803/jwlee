import { throttledRetrievePage } from '.';

export async function getNotionPageTitle(pageId: string) {
  const page = await throttledRetrievePage(pageId);
  // @ts-expect-error 타입 추정 불가
  const properties = page.properties;

  const titleProp =
    properties?.Name?.title?.[0]?.plain_text ??
    properties?.Title?.title?.[0]?.plain_text ??
    'Untitled';

  return titleProp;
}
