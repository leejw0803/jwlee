import { type PropsWithChildren } from 'react';
import Header from '@/_views/components/templetes/header';
import { Container } from '@/_views/components/elements/grid';

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <Container>{children}</Container>
      </main>
    </>
  );
}

export default Layout;
