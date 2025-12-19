import getAdminSite from "@/lib/getAdminSite";
import { PageLayout } from "@lumeo-cms/base-theme";

export type PageHomeParams = Promise<{
  locale: string;
}>;

export default async function HomePage(props: { params: PageHomeParams }) {
  const { locale } = await props.params;
  const admin = await getAdminSite(locale);

  return <PageLayout props={admin.identity.homepage} />;
}
