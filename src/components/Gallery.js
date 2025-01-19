// src/components/Gallery.js
import React from 'react';

const Gallery = () => {
  return (
    <div>
      <h2>Library Gallery</h2>
      <div className="gallery">
        <img src="library_photo1.jpg" alt="Library 1" />
        <img src="library_photo2.jpg" alt="Library 2" />
        <img src="library_photo3.jpg" alt="Library 3" />
      </div>
    </div>
  );
};

export default Gallery;
