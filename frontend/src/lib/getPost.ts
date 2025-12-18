export async function getPosts() {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Posts`);
  }

  const posts = await res.json();
  return posts;
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/posts/slug/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Post with slug: ${slug}`);
  }

  const post = await res.json();
  return post;
}
