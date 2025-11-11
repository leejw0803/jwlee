import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import { cn } from '@/lib/utils';

type RichText = {
  text: { content: string; link: { url: string } | null };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
};
type Column = {
  width_ratio: number;
};

export type Block = {
  id: string;
  type: string;
  has_children: boolean;
  children?: Block[];
  column?: Column;
  [key: string]: any;
};

const RichTextRenderer = ({ richTexts }: { richTexts: RichText[] }) => (
  <>
    {richTexts.map((rt, i) => {
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
    <div className="w-full max-w-5xl mx-auto">
      <TypographyH1>{title}</TypographyH1>
      {renderBlocks(blocks)}
    </div>
  );
};
