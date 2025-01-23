import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6">Blog Posts</h2>

      <div className="max-w-screen-sm mx-auto px-6">
        {
          posts.slice(0, 9).map(post =>
            <li key={post.id}  className="text-xl font-bold text-gray-700 mb-4"><Link href={`/blogs/${post.id}`}>{post.title}</Link></li>
          )
        }
      </div>
    </div>
  );
}
