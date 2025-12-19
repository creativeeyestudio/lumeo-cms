import getAdminSite from "@/lib/getAdminSite";
import { PageLayout } from "@lumeo-cms/base-theme";

export type PageHomeParams = Promise<{
  locale: string;
}>;

export default async function HomePage(props: { params: PageHomeParams }) {
  const { locale } = await props.params;
  const admin = await getAdminSite(locale);

  return <PageLayout logo={admin.identity.site_logo} page={admin.identity.homepage} />;
}
