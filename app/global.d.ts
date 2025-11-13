/* eslint-disable @typescript-eslint/no-explicit-any */
// global.d.ts
declare module '*.css';

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

type NotionDBProperty = {
  id: string;
  type: string;
  [key in string]: RichText;
};

type ProjectDBProperties = 'Name' | 'Description';

type Column = {
  width_ratio: number;
};

type Block = {
  id: string;
  type: string;
  has_children: boolean;
  children?: Block[];
  column?: Column;
  [key: string]: any;
};
