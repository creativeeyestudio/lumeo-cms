import getAdminSite from "@/lib/getAdminSite";
import getMenus from "@/lib/getMenus";
import { PageLayout } from "@lumeo-cms/base-theme";

export type PageHomeParams = Promise<{
  locale: string;
}>;

export default async function HomePage(props: { params: PageHomeParams }) {
  const { locale } = await props.params;
  const admin = await getAdminSite(locale);
  const menus = await getMenus();

  return <PageLayout logo={admin.identity.site_logo} page={admin.identity.homepage} menus={menus} />;
}
