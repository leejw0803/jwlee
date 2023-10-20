import { createContext, type PropsWithChildren } from 'react';
import { Column } from '@/_views/components/elements/grid';
import Typography from '@/_views/components/elements/typography';
import Project from '@/_views/components/templetes/project';

const SectionContext = createContext('default');

function Title({ children }: PropsWithChildren) {
  return (
    <Typography variant="titlebold" color="grey800">
      {children}
    </Typography>
  );
}

function Section({ children }: PropsWithChildren) {
  return (
    <SectionContext.Provider value={'default'}>
      <Column className="col-span-full gap-2 mb-4 p-4 bg-grey300 rounded-lg">{children}</Column>
    </SectionContext.Provider>
  );
}

Section.Title = Title;

export default Section;
