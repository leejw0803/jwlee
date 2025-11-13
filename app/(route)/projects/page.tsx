import { Component, Lib } from '@/app/_shared';
import Link from 'next/link';

export default async function Projects() {
  const pages = await Lib.Notion.getPageList(process.env.NOTION_API_PROJECTS_DB_ID!);

  return (
    <div className="w-full grid grid-cols-3 max-w-5xl mx-auto p-6 gap-4">
      {pages.map((db) => {
        // @ts-expect-error db.properties의 타입을 명확하게 정의할 수 없음
        const properties = db.properties;
        const title = properties.Name?.title?.[0]?.plain_text ?? 'Untitled';
        const desc = properties.Description?.rich_text?.[0]?.plain_text ?? 'No description';

        return (
          <Link href={`/projects/${db.id}`} key={db.id}>
            <Component.Atom.Card className=" border-primary-foreground h-[150px]">
              <Component.Atom.CardHeader>
                <Component.Atom.CardTitle>{title}</Component.Atom.CardTitle>
                <Component.Atom.CardDescription>{desc}</Component.Atom.CardDescription>
              </Component.Atom.CardHeader>
            </Component.Atom.Card>
          </Link>
        );
      })}
    </div>
  );
}
