import { PageRenderer } from "../../../core";

export type PageHomeParams = Promise<{
  locale: string;
}>;

export default async function HomePage(props: { params: PageHomeParams }) {
  const { locale } = await props.params;

  return <PageRenderer page={undefined} />;
}