import { notion } from '.';

export async function injectFreshImageUrls(block: Block) {
  if (block.type === 'image') {
    const fresh = await notion.blocks.retrieve({ block_id: block.id });

    // @ts-expect-error 타입 추론 불가
    const image = fresh.image;
    if (image.type === 'file') {
      block.image.file.url = image.file.url;
    }
  }

  if (block.children) {
    await Promise.all(block.children.map((child) => injectFreshImageUrls(child)));
  }

  return block;
}
