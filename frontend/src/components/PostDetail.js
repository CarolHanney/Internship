import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Image from './Image'; 
const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(true);
  const [errorPost, setErrorPost] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        setErrorPost(true);
      } finally {
        setLoadingPost(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loadingPost) return <p className="text-gray-500 text-center">Loading post...</p>;
  if (errorPost || !post) return <p className="text-gray-500 text-center">Post not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg">
        
        <Image
          imageId={post.coverImage?.id}
          alt={post.coverImage?.alt || 'Cover Image'}
          className="w-full h-64 object-cover rounded"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">{post.title}</h1>
        <p className="text-gray-600 text-sm mt-2">By {post.author.name}</p>
        <div className="mt-6 text-gray-700 whitespace-pre-line">{post.body}</div>

        
        <div className="mt-6 flex items-center">
          <Image
            imageId={post.author.profilePicture?.id}
            alt={post.author.profilePicture?.alt || 'Author Profile'}
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <p className="text-gray-800 font-semibold">{post.author.name}</p>
            <p className="text-gray-600">{post.author.bio}</p>
          </div>
        </div>

        <div className="px-6 py-4 flex justify-end">
          <Link to="/">
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
              Back to Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
