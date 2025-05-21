import clientPromise from "@/app/lib/mongodb";
import PostList from "../Components/Dashboard/PostList";
import FlyerAd from "../Components/FlyerAd";

export default async function ForumPage() {
  const client = await clientPromise;
  const db = client.db("DSG7");
  const posts = await db
    .collection("Forum")
    .find({ visibility: true }) // ✅ Only show approved posts
    .sort({ createdAt: -1 })
    .toArray();

  const cleanPosts = posts?.map((post) => ({
    _id: post?._id.toString(), // ObjectId ➜ string
    title: post?.title,
    description: post?.description,
    name: post?.name,
    visibility: post?.visibility,
    createdAt: post?.createdAt?.toString(), // ISODate ➜ string (optional)
    likes: post?.likes || 0,
    views: post?.views || 0,
    comments: (post?.comments || []).map((comment) => ({
      id: comment?.id,
      author: comment?.author,
      email: comment?.email,
      text: comment?.text,
      timestamp: comment?.timestamp,
      likes: comment?.likes || 0,
    })),
  }));

  return (
    <div className="flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto px-4 py-12">
      <div className="w-full lg:w-3/4 space-y-6">
        <PostList posts={cleanPosts} />
      </div>

      {/* Here should be a section just like Flyer */}
      <div className="w-full lg:w-1/4">
        <FlyerAd />
      </div>
    </div>
  );
}
