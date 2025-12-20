export default async function getMenus() {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/navigation`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Menus`);
  }

  const menus = await res.json();
  return menus.docs;
}
