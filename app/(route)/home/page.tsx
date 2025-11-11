import { Block, NotionRenderer } from '@/components/ui/notion-block-renderer';
import resumeData from '@/data/resume.json';

export default function Home() {
  return (
    <div className="w-full bg-background/60">
      <NotionRenderer blocks={resumeData as Block[]} title="이정우" />
    </div>
  );
}
