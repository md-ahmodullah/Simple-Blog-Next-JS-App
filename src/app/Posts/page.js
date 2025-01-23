import Link from "next/link";
import getAllPosts from "../lib/getAllPosts";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="overflow-x-auto py-6">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <th>{post.id}</th>
                <td>{post.title}</td>
                <Link
                  className="btn btn-sm btn-primary"
                  href={`/Posts/${post.id}`}
                >
                  See Details
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
