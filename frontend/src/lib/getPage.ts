export default async function getPageBySlug(slug: string) {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/pages/slug/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Page with slug: ${slug}`);
  }

  const page = await res.json();
  return page;
}
