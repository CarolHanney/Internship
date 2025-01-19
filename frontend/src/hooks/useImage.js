import { useState, useEffect } from 'react';
import { fetchImageById } from '../services/mediaService';

const useImage = (imageId) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!imageId) {
      setError(true);
      setLoading(false);
      return;
    }

    const getImage = async () => {
      setLoading(true);
      setError(false);
      try {
        const url = await fetchImageById(imageId);
        console.log(url);
        setImageUrl(url);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getImage();
  }, [imageId]);

  return { imageUrl, loading, error };
};

export default useImage;
