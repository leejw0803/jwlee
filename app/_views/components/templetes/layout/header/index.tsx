import Link from 'next/link';
import Logo from '@/_views/components/compounds/logo';
import { Column, Container, Row } from '@/_views/components/elements/grid';
import Typography from '@/_views/components/elements/typography';

function Header() {
  return (
    <header className=" w-full h-header flex justify-center">
      <Container>
        <Column className=" col-span-3 items-start justify-center">
          <Logo />
        </Column>
        <Column className=" col-span-9 items-start justify-center">
          <Row className=" items-center gap-8">
            <Link href="/about-me">
              <Typography
                variant="body"
                color="grey500"
                className=" hover:scale-105 transition-transform"
              >
                About me
              </Typography>
            </Link>
            <Link href="/posts">
              <Typography
                variant="body"
                color="grey500"
                className=" hover:scale-105 transition-transform"
              >
                Posts
              </Typography>
            </Link>
          </Row>
        </Column>
      </Container>
    </header>
  );
}

export default Header;
