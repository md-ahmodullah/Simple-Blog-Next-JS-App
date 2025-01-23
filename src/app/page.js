import getAllPosts from "./lib/getAllPosts";
import Posts from "./Posts/page";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <>
      <div className="mt-12">
        <h1 className="text-2xl font-bold text-center my-6">
          Our Latest Posts
        </h1>
        <Posts />
      </div>
    </>
  );
}
