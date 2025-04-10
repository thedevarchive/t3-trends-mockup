import { api } from "@/trpc/react";
  
  // Then in your sidebar component:
export const Sidebar = () => {
  const { data: profile, isLoading } = api.post.getProfile.useQuery();

  if (isLoading) return <div>Loading...</div>;

  const formatFollows = (amount: number): string => {
    if(amount >= 1000000) {
        amount /= 1000000; 
        return amount + "M"; 
    }
    else if(amount >= 1000) {
        amount /= 1000; 
        return amount + "k"; 
    }
    return String(amount); 
  }

    /* Used ChatGPT to understand how to modify text spacing */
    return (
      <div className="flex flex-col bg-gray-100 h-auto w-[250px] rounded-lg items-center outline outline-2 outline-gray-300">
        {/* Used ChatGPT to understand why items were not centering even if I placed item-center 
            and to understand how to outline a circular item */}
        <div className="flex items-center justify-center mt-10 mb-1 h-30 w-30 outline outline-2 outline-gray-300 rounded-full bg-indigo-500 text-4xl font-bold text-white">
            JD
        </div>
        <div className="mx-4 p-4 mb-10 text-center gap">
          <h1 className="text-black font-bold text-3xl">{profile?.firstName} {profile?.lastName}</h1>
          <p className="text-gray-500 text-xl mt-2 mb-6">@{profile?.userName}</p>
          <hr className="border border-gray-300 my-4 w-50" /> 
          <div className="flex flex-row gap-8 text-left text-lg">
            {/* Used ChatGPT to understand why flex is not arranging the items inside into columns */}
            <div className="flex flex-col">
                <p className="font-bold">Following</p>
                <p>{profile ? formatFollows(profile.following) : "--"}</p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold">Followers</p>
                <p>{profile ? formatFollows(profile.followers) : "--"}</p>
            </div>
          </div>
          <hr className="border border-gray-300 my-4 w-50" /> 
          <div className="flex flex-col pt-5 gap-4">
            <button className="text-lg font-bold text-white bg-blue-600 rounded-lg w-50 h-auto p-3">Edit Profile</button>
            <button className="text-lg font-bold text-black rounded-lg w-50 h-auto p-3 outline outline-2 outline-gray-300">Share Profile</button>
          </div>
        </div>
      </div>
    );
  };