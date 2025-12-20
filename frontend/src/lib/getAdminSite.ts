export default async function getAdminSite(locale: string) {
  const res = await fetch(
    `${process.env.PAYLOAD_URL}/api/globals/customization?depth=2&draft=false&locale=${locale}&trash=false`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch Settings`);
  }

  const page = await res.json();
  return page;
}
