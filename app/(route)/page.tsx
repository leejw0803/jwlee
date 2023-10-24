import { Column } from '@/_views/components/elements/grid';
import { SplashScreen } from '@/_views/components/elements/splash';

import Link from 'next/link';

export default function Home() {
  return (
    <Column className=" col-span-full">
      {/* <Link href="/intro"> */}
      <SplashScreen />
      {/* </Link> */}
    </Column>
  );
}
