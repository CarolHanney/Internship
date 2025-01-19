
import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { fetchPosts } from '../services/postsService';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.docs || []);
      } catch (error) {
        console.error('Error loading posts:', error);
        setPosts([]);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div className="text-gray-500 text-center col-span-full">Loading Posts...</div>
      )}
    </div>
  );
};

export default PostsList;
