
  
  // Then in your sidebar component:
export const Sidebar = () => {
    return (
      <div className="flex flex-col bg-gray-100 h-auto w-[250px] rounded-lg items-center outline outline-2 outline-gray-300">
        {/* Logo area */}
        <div className="flex items-center justify-center mt-10 mb-1 h-30 w-30 outline outline-2 outline-gray-300 rounded-full bg-indigo-500 text-4xl font-bold text-white">
            JD
        </div>
        <div className="mx-4 p-4 mb-10 text-center gap">
          <h1 className="text-black font-bold text-3xl">John Doe</h1>
          <p className="text-gray-500 text-xl mt-2 mb-6">@johndoe</p>
          <hr className="border border-gray-300 my-4 w-50" /> 
          <div className="flex flex-row gap-8 text-left text-lg">
            <div className="flex flex-col">
                <p className="font-bold">Following</p>
                <p>245</p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold">Followers</p>
                <p>1.2k</p>
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