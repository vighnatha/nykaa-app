import React from 'react';
import './ImageLinks.css'; 

const ImageLinks = () => {
  return (
    <section className="image-links-section">
      <div className="image-card">
        <a href="/makeup">
          <img src="Assets/Images/makeup.png" alt="Makeup" className="image" />
          <div className="overlay">Makeup</div>
        </a>
      </div>
      <div className="image-card">
        <a href="/skin">
          <img src="Assets/Images/skincare.png" alt="Skin" className="image" />
          <div className="overlay">Skin</div>
        </a>
      </div>
      <div className="image-card">
        <a href="/haircare">
          <img src="Assets/Images/haircare.png" alt="Haircare" className="image" />
          <div className="overlay">Haircare</div>
        </a>
      </div>
      <div className="image-card">
        <a href="/bathbody">
          <img src="Assets/Images/bathcare.png" alt="Bath&Body" className="image" />
          <div className="overlay">Bath&Body</div>
        </a>
      </div>
    </section>
  );
}

export default ImageLinks;
