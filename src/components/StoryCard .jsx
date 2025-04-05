// src/components/StoryCard.jsx

import { ThumbsUp, ThumbsDown, Eye } from 'lucide-react';

const StoryCard = ({data}) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-6 space-y-4 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{data.title}</h2>

      <p className="text-gray-600 text-justify">{data.body}</p>

      <div className="flex flex-wrap gap-2">
      
      {data.tags.map((tag)=>{
          return ( <span
               key=''
               className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
             >
               {tag}
             </span>
             )
      })}
         
       
      </div>

      <div className="flex items-center justify-between text-gray-500 text-sm pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <ThumbsUp size={16} /> {data.reactions.likes}
          </span>
          <span className="flex items-center gap-1">
            <ThumbsDown size={16} />{ data.reactions.dislikes}
          </span>
        </div>

        <span className="flex items-center gap-1">
          <Eye size={16} /> {data.views} views
        </span>
      </div>
    </div>
  );
};

export default StoryCard;
