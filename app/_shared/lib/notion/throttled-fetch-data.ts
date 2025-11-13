import pThrottle from 'p-throttle';
import { notion } from '.';

const throttle = pThrottle({
  limit: 3,
  interval: 1000,
});

export const throttledRetrieveBlock = throttle((id: string) =>
  notion.blocks.retrieve({ block_id: id })
);

export const throttledListChildren = throttle((id: string) =>
  notion.blocks.children.list({ block_id: id })
);

export const throttledRetrievePage = throttle((pageId: string) =>
  notion.pages.retrieve({ page_id: pageId })
);

export const throttledRetrieveDatabase = throttle((dbId: string) =>
  notion.request({
    method: 'get',
    path: `databases/${dbId}`,
  })
);

export const throttledQueryDataSource = throttle((dataSourceId: string) =>
  notion.dataSources.query({
    data_source_id: dataSourceId,
  })
);
