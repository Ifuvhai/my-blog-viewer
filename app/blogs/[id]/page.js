import getPost from "@/lib/getPost";

export default async function PostPage({params}){
    const {id} =await params;
    const posts = await getPost(id)
    return (
        <div className="max-w-screen-md mx-auto mt-6 text-center p-2">
            <h2 className="text-2xl font bold my-4 text-blue-500">{posts.title}</h2>
            <p className="text-gray-700">{posts.body}</p>
        </div>
    )
}