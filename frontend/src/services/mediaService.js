import api from './api'; 

export const fetchImageById = async (imageId) => {
  try {
    const response = await api.get(`/api/media/${imageId}`);
    const { filename } = response.data;
    console.log('filename:', filename);
    const imageUrl = `${api.defaults.baseURL}/api/media/file/${filename}`;

    return imageUrl; 

  } catch (error) {
    console.error('Error fetching image:', error);
    
    return null;
  }
};
