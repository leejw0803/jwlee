import Layout from '@/_views/components/templetes/layout';
import '@/_views/style/globals.css';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
