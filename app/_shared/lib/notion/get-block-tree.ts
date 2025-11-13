import { throttledRetrieveBlock, throttledListChildren } from '.';

export async function getBlockTree(blockId: string) {
  const block = await throttledRetrieveBlock(blockId);

  if ('has_children' in block && block.has_children) {
    const childrenRes = await throttledListChildren(blockId);

    // @ts-expect-error children을 가진 블락만 해당되는데 타입추정은 안되고 있음
    block.children = await Promise.all(
      childrenRes.results.map(async (child) => {
        if ('has_children' in child && child.has_children) {
          return await getBlockTree(child.id);
        }
        return child;
      })
    );
  }

  return block;
}
