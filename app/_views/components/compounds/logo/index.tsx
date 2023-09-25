import Link from 'next/link';
import { Row } from '@/_views/components/elements/grid';
import Typography from '@/_views/components/elements/typography';

function Logo() {
  return (
    <Link href="/">
      <Row>
        <Typography variant="headbold" color="grey600">
          {'@jwlee'}
        </Typography>
      </Row>
    </Link>
  );
}

export default Logo;
