export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    // This is called Incremental Static Regeneration (ISR), which updates data if the source data is also updating.
    // the value we put the value of revalidate in seconds, to wait before it checks for new data again. (This can be applied to Static Site Generation SSG or Server Side Rendering SSR)
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
