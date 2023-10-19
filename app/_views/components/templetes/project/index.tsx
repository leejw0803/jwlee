import { type PropsWithChildren, createContext } from 'react';
import { Column } from '@/_views/components/elements/grid';
import Typography from '@/_views/components/elements/typography';

const ProjectContext = createContext('default');

function Title({ children }: PropsWithChildren) {
  return (
    <Typography variant="subtitle" color="grey900">
      {children}
    </Typography>
  );
}

function Period({ children }: PropsWithChildren) {
  return (
    <Typography variant="caption2" color="grey900">
      {children}
    </Typography>
  );
}

function Reason({ children }: PropsWithChildren) {
  return (
    <Column className="gap-2">
      <Typography variant="body" color="grey900">
        ✔ 진행 이유
      </Typography>
      <Typography variant="caption2" color="grey900">
        {children}
      </Typography>
    </Column>
  );
}

function Purpose({ children }: PropsWithChildren) {
  return (
    <Column className="gap-2">
      <Typography variant="body" color="grey900">
        ✔ 목표
      </Typography>
      <Typography variant="caption2" color="grey900">
        {children}
      </Typography>
    </Column>
  );
}

function Detail({ children }: PropsWithChildren) {
  return (
    <Column className="gap-2">
      <Typography variant="body" color="grey900">
        ✔ 상세
      </Typography>
      {children}
    </Column>
  );
}

function DetailSubtitle({ children }: PropsWithChildren) {
  return (
    <Typography variant="caption1" color="grey900">
      {children}
    </Typography>
  );
}

function DetailContent({ children }: PropsWithChildren) {
  return (
    <Typography variant="caption2" color="grey900">
      {children}
    </Typography>
  );
}

function Stacks({ children }: PropsWithChildren) {
  return (
    <Typography variant="caption3" color="grey900">
      {children}
    </Typography>
  );
}

function Project({ children }: PropsWithChildren) {
  return <ProjectContext.Provider value={'default'}>{children}</ProjectContext.Provider>;
}

Project.Title = Title;
Project.Period = Period;
Project.Reason = Reason;
Project.Purpose = Purpose;
Project.Detail = Detail;
Project.DetailSubtitle = DetailSubtitle;
Project.DetailContent = DetailContent;
Project.Stacks = Stacks;

export default Project;
