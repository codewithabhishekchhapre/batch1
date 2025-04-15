import React from "react";

const ProfileCard = () => {
     const name = "John Doe";
     const role = "Software Engineer";
     const image = "https://via.placeholder.com/150";
     const email= 'abhishek@gmail.com'
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6">
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
          src={image}
          alt="Profile"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-sm text-gray-600 mt-2">{email}</p>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button className="px-4 py-2 text-sm text-white bg-indigo-500 rounded-lg shadow hover:bg-indigo-600 transition">
          Message
        </button>
        <button className="px-4 py-2 text-sm text-indigo-500 border border-indigo-500 rounded-lg hover:bg-indigo-50 transition">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
