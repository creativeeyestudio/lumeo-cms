import { PageLayout } from '@lumeo-cms/base-theme'

export type CurrentPageParams = Promise<{
  locale: string;
}>;

export default async function CurrentPage(props: {
  params: CurrentPageParams;
}) {
  const { locale } = await props.params;

  return <PageLayout />;
}
