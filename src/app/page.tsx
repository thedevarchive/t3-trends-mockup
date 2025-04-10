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
          <div className="bg-white rounded-lg w-200 h-auto space-y-4 outline outline-gray-300 py-8">
            <div className="ml-10">
              <div className="text-3xl font-bold pb-6">User Activity</div>
              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-md py-4 w-35 h-15">
                  <p className="text-white text-center text-lg font-bold">Posts</p>
                </div>
                <div className="bg-gray-100 rounded-md py-4 w-35 h-15 outline-2 outline-gray-300">
                  <p className="text-black text-center text-lg">Comments</p>
                </div>
                <div className="bg-gray-100 rounded-md py-4 w-35 h-15 outline-2 outline-gray-300">
                  <p className="text-black text-center text-lg">Likes</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
