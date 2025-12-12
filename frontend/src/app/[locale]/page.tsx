export type PageHomeParams = Promise<{
  locale: string;
}>;

/* --------------------------------------------------
   Rendu de la page
-------------------------------------------------- */
export default async function HomePage(props: { params: PageHomeParams }) {
  const { locale } = await props.params;

  return <></>;
}