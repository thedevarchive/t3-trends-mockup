"use client";

import { Sidebar } from "./_components/Sidebar";
import { api } from "@/trpc/react";

export default function Home() {
  const { data: posts, isLoading } = api.post.getPosts.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="bg-blue-600 flex items-center justify-between p-10 text-white">
        <h1 className="text-3xl font-bold">T3 Trends</h1>
        <div className="flex justify-between gap-6 text-2xl mr-18">
          <div>Dashboard</div>
          <div>Logout</div>
        </div>
      </div>
      <main className="flex min-h-screen flex-col bg-gray-200 text-black">
        <div className="container flex flex-col items-center justify-center gap-12 mx-20 py-16">
          <div className="flex flex-row bg-white rounded-lg w-200 h-auto outline outline-gray-300">
            <Sidebar />
            <div className="ml-10 space-y-8 py-8">
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
                {posts?.map((p) => (
                  <div key={p.id} className="bg-white rounded-md p-4 w-120 h-auto outline-2 outline-gray-300">
                    <p className="text-black text-2xl font-semibold">{p.title}</p>
                    <p className="text-gray-500 text-lg leading-tight">{p.description}</p>
                    <div className="flex mt-2 gap-2 text-gray-400">
                      <p>Posted {p.timeAgo} ago</p>
                      <p>•</p>
                      <p>{p.comments} comments</p>
                      <p>•</p>
                      <p>{p.likes} likes</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
