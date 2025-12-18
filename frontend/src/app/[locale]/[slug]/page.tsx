import getPageBySlug from "@/lib/getPage";

export type CurrentPageParams = Promise<{
  locale: string;
  slug: string;
}>;

export default async function CurrentPage(props: {
  params: CurrentPageParams;
}) {
  const { locale, slug } = await props.params;

  const page = await getPageBySlug(slug);

  console.log(page);

  return locale;
}
