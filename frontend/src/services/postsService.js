import api from './api';

export const fetchPosts = async (page = 1, limit = 10, search = '') => {
  try {
    const response = await api.get('/api/posts', {
      params: { page, limit, search },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return { docs: [], totalDocs: 0, limit, totalPages: 0, page: 0 };
  }
};


export const fetchPostById = async (id) => {
  try {
    const response = await api.get(`/api/posts/${id}`); 
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error.message);
    return null;
  }
};

export default { fetchPosts, fetchPostById };
