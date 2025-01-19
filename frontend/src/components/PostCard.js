
import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image'; 

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <Image
        imageId={post.coverImage?.id}
        alt={post.coverImage?.alt || 'Cover Image'}
        className="w-full h-64 object-cover rounded-t" 
      />
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">
          {post.title}
        </div>
        <p className="text-gray-600 text-base">
          By {post.author.name}
        </p>
      </div>
      
      <div className="px-6 py-4 flex justify-end">
        <Link to={`/post/${post.id}`}>
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
