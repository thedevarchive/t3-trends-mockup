import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="bg-blue-600 flex items-center justify-between p-10 text-white">
        <h1 className="text-3xl font-bold">T3 Trends</h1>
        <div className="flex justify-between gap-6 text-2xl mr-18">
          <div>Dashboard</div>
          <div>Logout</div>
        </div>
      </div>
      <main className="flex min-h-screen flex-col bg-gray-200 text-black">
        <div className="container flex flex-col items-center justify-center gap-12 mx-20 py-16">
          <div className="bg-white rounded-lg w-200 h-auto outline outline-gray-300 py-8">
            <div className="ml-10 space-y-8">
              <div className="text-3xl font-bold">User Activity</div>
              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-md py-4 w-35 h-15">
                  <p className="text-white text-center text-xl font-bold">Posts</p>
                </div>
                <div className="bg-gray-100 rounded-md py-4 w-35 h-15 outline-2 outline-gray-300">
                  <p className="text-black text-center text-xl">Comments</p>
                </div>
                <div className="bg-gray-100 rounded-md py-4 w-35 h-15 outline-2 outline-gray-300">
                  <p className="text-black text-center text-xl">Likes</p>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white rounded-md p-4 w-120 h-auto outline-2 outline-gray-300">
                  <p className="text-black text-2xl font-semibold">Getting Started with T3 Stack</p>
                  <p className="text-gray-500 text-lg leading-tight">A comprehensive guide to building apps with the T3 stack.</p>
                  <div className="flex mt-2 gap-2 text-gray-400">
                    <p>Posted 2 days ago</p>
                    <p>•</p>
                    <p>24 comments</p>
                    <p>•</p>
                    <p>142 likes</p>
                  </div>
                </div>
                <div className="bg-white rounded-md p-4 w-120 h-auto outline-2 outline-gray-300">
                  <p className="text-black text-2xl font-semibold">Next.js 13 Features You Should Know</p>
                  <p className="text-gray-500 text-lg leading-tight">Exploring the latest features in Next.js 13 that will…</p>
                  <div className="flex mt-2 gap-2 text-gray-400">
                    <p>Posted 5 days ago</p>
                    <p>•</p>
                    <p>18 comments</p>
                    <p>•</p>
                    <p>97 likes</p>
                  </div>
                </div>
                <div className="bg-white rounded-md p-4 w-120 h-auto outline-2 outline-gray-300">
                  <p className="text-black text-2xl font-semibold">Why tRPC Will Change Your Workflow</p>
                  <p className="text-gray-500 text-lg leading-tight">A deep dive into tRPC and how it enhances type safety.</p>
                  <div className="flex mt-2 gap-2 text-gray-400">
                    <p>Posted 1 week ago</p>
                    <p>•</p>
                    <p>32 comments</p>
                    <p>•</p>
                    <p>211 likes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
