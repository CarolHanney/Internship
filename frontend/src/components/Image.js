// src/components/Image.js

import React from 'react';
import useImage from '../hooks/useImage';

const Image = ({ imageId, alt, className }) => {
  const { imageUrl, loading, error } = useImage(imageId);
console.log(imageUrl);
  if (loading) {
    return <div className={`w-full h-48 bg-gray-200 animate-pulse ${className}`}></div>;
  }

  return (
    <img
      className={className}
      src={imageUrl}
      alt={alt || 'Image'}
    />
  );
};

export default Image;
