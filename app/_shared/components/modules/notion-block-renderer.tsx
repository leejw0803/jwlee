/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Alert,
  AlertDescription,
  Separator,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyTitle,
} from '../atoms';
import { cn } from '@/app/_shared/lib/util';

const RichTextRenderer = ({ richTexts }: { richTexts: RichText[] }) => (
  <>
    {richTexts.map((rt, i) => {
      // console.log(rt.text === undefined ? rt : '?');
      let el: React.ReactNode = rt.text.link ? (
        <a
          href={rt.text.link.url || '#'}
          className={cn(
            'text-primary underline-offset-2 hover:underline',
            rt.annotations.color === 'gray' && 'text-muted-foreground'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {rt.text.content}
        </a>
      ) : (
        <span
          className={cn('text-primary', rt.annotations.color === 'gray' && 'text-muted-foreground')}
        >
          {rt.text.content}
        </span>
      );

      if (rt.annotations.bold)
        el = (
          <strong
            className={cn(
              'text-primary',
              rt.annotations.color === 'gray' && 'text-muted-foreground'
            )}
          >
            {el}
          </strong>
        );
      if (rt.annotations.italic)
        el = (
          <em
            className={cn(
              'text-primary',
              rt.annotations.color === 'gray' && 'text-muted-foreground'
            )}
          >
            {el}
          </em>
        );
      if (rt.annotations.strikethrough)
        el = (
          <s
            className={cn(
              'text-primary',
              rt.annotations.color === 'gray' && 'text-muted-foreground'
            )}
          >
            {el}
          </s>
        );
      if (rt.annotations.underline)
        el = (
          <u
            className={cn(
              'text-primary',
              rt.annotations.color === 'gray' && 'text-muted-foreground'
            )}
          >
            {el}
          </u>
        );
      if (rt.annotations.code)
        el = <span className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">{el}</span>;

      return <React.Fragment key={i}>{el}</React.Fragment>;
    })}
  </>
);

export const BlockRenderer = ({ block }: { block: Block }) => {
  const { type } = block;

  switch (type) {
    case 'paragraph':
      const content = block.paragraph.rich_text;
      if (content.length === 0) {
        // 빈 문단이라면 공간용 placeholder 추가
        return <p className="my-2 min-h-4" />;
      }
      return (
        <TypographyP>
          <RichTextRenderer richTexts={content} />
        </TypographyP>
      );

    case 'heading_1':
      return (
        <TypographyH1 className="text-primary">
          <RichTextRenderer richTexts={block.heading_1.rich_text} />
        </TypographyH1>
      );

    case 'heading_2':
      return (
        <TypographyH2>
          <RichTextRenderer richTexts={block.heading_2.rich_text} />
        </TypographyH2>
      );

    case 'heading_3':
      return (
        <TypographyH3>
          <RichTextRenderer richTexts={block.heading_3.rich_text} />
        </TypographyH3>
      );

    case 'heading_4':
      return (
        <TypographyH4>
          <RichTextRenderer richTexts={block.heading_4.rich_text} />
        </TypographyH4>
      );
    case 'bulleted_list_item':
      return (
        <li className="ml-6">
          <RichTextRenderer richTexts={block.bulleted_list_item.rich_text} />

          {block.children && block.children.length > 0 && (
            <ul className="ml-6 mt-1 list-disc">
              {block.children.map((child) => (
                <BlockRenderer key={child.id} block={child} />
              ))}
            </ul>
          )}
        </li>
      );

    case 'numbered_list_item':
      return (
        <li className="ml-6">
          <RichTextRenderer richTexts={block.numbered_list_item.rich_text} />

          {block.children && block.children.length > 0 && (
            <ol className="ml-6 mt-1 list-decimal">
              {block.children.map((child) => (
                <BlockRenderer key={child.id} block={child} />
              ))}
            </ol>
          )}
        </li>
      );

    case 'divider':
      return <Separator className="my-6" />;

    case 'column_list':
      return (
        <div className="flex w-full gap-6">
          {block.children?.map((column: Block) => {
            // 기본값 1, width_ratio 있으면 비율 반영
            const widthRatio = column.column?.width_ratio || 1;

            return (
              <div
                key={column.id}
                className="flex flex-col"
                style={{
                  flexGrow: widthRatio,
                  flexBasis: `${widthRatio * 100}%`, // 비율 기반 width
                }}
              >
                {column.children?.map((child) => (
                  <BlockRenderer key={child.id} block={child} />
                ))}
              </div>
            );
          })}
        </div>
      );

    case 'image': {
      const src = block.image.type === 'external' ? block.image.external.url : block.image.file.url;
      const caption = block.image.caption?.[0]?.plain_text || '';

      return (
        <figure className="my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={caption || 'notion image'}
            className="rounded-md border border-border mx-auto"
          />
          {caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case 'callout': {
      const text = block.callout.rich_text;
      const icon = block.callout.icon?.emoji || '💡';
      return (
        <Alert className="my-4 border-border bg-muted/40">
          <AlertDescription className="flex items-center gap-2">
            <span>{icon}</span>
            <TypographyP>
              <RichTextRenderer richTexts={text} />
            </TypographyP>
          </AlertDescription>
        </Alert>
      );
    }

    case 'code': {
      const lang = block.code.language || 'text';
      const text = block.code.rich_text?.map((t: any) => t.plain_text).join('') || '';
      const caption = block.code.caption?.[0]?.plain_text;

      return (
        <div className="my-6">
          {/* Code Box */}
          <pre
            className={cn(
              'w-full overflow-x-auto rounded-md bg-zinc-900 text-zinc-100 p-4',
              'text-sm leading-relaxed border border-zinc-800'
            )}
          >
            <code className={`language-${lang}`}>{text}</code>
          </pre>

          {/* Optional Caption */}
          {caption && <p className="text-sm text-muted-foreground mt-2 text-center">{caption}</p>}
        </div>
      );
    }

    default:
      return null;
  }
};

export const NotionRenderer = ({ blocks, title }: { blocks: Block[]; title: string }) => {
  const renderBlocks = (blocks: Block[]) => {
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];

      // --- 📍연속된 numbered_list_item 그룹 감지
      if (block.type === 'numbered_list_item') {
        const listGroup = [block];

        while (i + 1 < blocks.length && blocks[i + 1].type === 'numbered_list_item') {
          listGroup.push(blocks[++i]);
        }

        elements.push(
          <ol key={block.id} className="ml-6 list-decimal space-y-1">
            {listGroup.map((item) => (
              <BlockRenderer key={item.id} block={item} />
            ))}
          </ol>
        );
        continue;
      }

      if (block.type === 'bulleted_list_item') {
        const listGroup = [block];
        while (i + 1 < blocks.length && blocks[i + 1].type === 'bulleted_list_item') {
          listGroup.push(blocks[++i]);
        }

        elements.push(
          <ul key={block.id} className="ml-6 list-disc space-y-1">
            {listGroup.map((item) => (
              <BlockRenderer key={item.id} block={item} />
            ))}
          </ul>
        );
        continue;
      }

      elements.push(<BlockRenderer key={block.id} block={block} />);
    }

    return elements;
  };
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <TypographyTitle>{title}</TypographyTitle>
      {renderBlocks(blocks)}
    </div>
  );
};
