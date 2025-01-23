import getPost from "@/app/lib/getPost";

export default async function PostDetails({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <>
      <div className="w-10/12 mx-auto">
        <h1 className="my-6 border-b-2 border-blue-400 text-3xl font-bold text-blue-400">
          Post Details : {id}
        </h1>
        <div className="py-6 space-y-3">
          <h1>
            <span className="text-lg font-bold text-blue-400">Title:</span>{" "}
            {post.title}
          </h1>
          <h1>
            <span className="text-lg font-bold text-blue-400">
              Description:{" "}
            </span>
            {post.body}
          </h1>
        </div>
      </div>
    </>
  );
}
