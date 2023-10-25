import { Column } from '@/_views/components/elements/grid';
import Onboarding from '@/_views/components/templetes/onboarding';

export default function HomePage() {
  return (
    <Column className=" col-span-full cursor-pointer">
      <Onboarding />
    </Column>
  );
}
