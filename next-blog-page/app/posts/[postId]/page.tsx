import getFormatedDate from "@/lib/getFormatedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetaData({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const { title, date, contentHTML } = await getPostData(postId);
  const pubDate = getFormatedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto text-white/95">
      <h1 className="text-3xl mt-4 mb-0 text-white/90">{title}</h1>
      <p className="mt-0 text-white/50">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHTML }} />
        <p>
          <Link className="font-bold text-white/50" href="/">
            ⬅️ Back to Home
          </Link>
        </p>
      </article>
    </main>
  );
}
