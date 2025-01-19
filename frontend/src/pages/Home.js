import React from 'react';
import PostsList from '../components/PostsList'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            Journeys &amp; Journals
          </h1>
          <p className="text-lg text-gray-600">
            Discover the world through insightful articles and stories.
          </p>
        </header>

        
        <main className="mt-8">
          <PostsList />
        </main>
        
      </div>
    </div>
  );
};

export default Home;
