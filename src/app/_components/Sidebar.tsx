
  
  // Then in your sidebar component:
export const Sidebar = () => {
    return (
      <div className="flex flex-col bg-gray-100 h-auto w-[250px] rounded-lg items-center outline outline-2 outline-gray-300">
        {/* Logo area */}
        <div className="flex items-center justify-center mt-10 mb-1 h-30 w-30 outline outline-2 outline-gray-300 rounded-full bg-violet-500 text-4xl font-bold text-white">
            JD
        </div>
        <div className="mx-4 p-4 mb-10 text-center gap">
          <h1 className="text-black font-bold text-3xl">John Doe</h1>
          <p className="text-gray-500 text-xl mt-2 mb-6">@johndoe</p>
          <hr className="border border-gray-300 my-4 w-50" /> 
          <hr className="border border-gray-300 my-4 w-50" /> 
        </div>
      </div>
    );
  };