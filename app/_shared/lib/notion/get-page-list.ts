import { throttledRetrieveDatabase, throttledQueryDataSource } from '.';

export async function getPageList(databaseId: string) {
  const db = await throttledRetrieveDatabase(databaseId);

  // @ts-expect-error - db의 타입을 알수 없음
  const dataSource = db.data_sources?.[0];
  if (!dataSource) {
    throw new Error('❌ Database에 data_source가 없습니다.');
  }

  const res = await throttledQueryDataSource(dataSource.id);

  return res.results;
}
