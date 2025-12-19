import getPageBySlug from "@/lib/getPage";
import { PageLayout } from "@lumeo-cms/base-theme";

export type CurrentPageParams = Promise<{
  locale: string;
  slug: string;
}>;

export default async function CurrentPage(props: {
  params: CurrentPageParams;
}) {
  const { locale, slug } = await props.params;
  const page = await getPageBySlug(locale, slug);

  return <PageLayout props={page} />;
}
