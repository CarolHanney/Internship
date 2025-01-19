import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './components/PostDetail'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen">
              <h2 className="text-2xl text-red-500">404 - Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
