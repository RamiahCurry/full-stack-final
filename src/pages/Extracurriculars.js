import React from 'react';
import image1 from './dull.jpeg';
import image2 from './mAthl.jpeg';
import image3 from './promo.jpeg';


const Extracurriculars = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <h1>Extracurriculars at Morehouse</h1>
      <p>Engage in a variety of sports, clubs, and other activities to enrich your college experience.</p>
      {/* Add more detailed sections or listings of activities here */}
      <img src={image2} alt="Image 1" style={{ position: 'absolute', bottom: 10, left: 100, width: '300px', height: '300px' }} />
      <img src={image3} alt="Image 2" style={{ position: 'absolute', bottom: 10, right: 100, width: '300px', height: '300px' }} />
      <img src={image1} alt="Image 3" style={{ position: 'absolute', bottom: 10, right: 550, width: '300px', height: '300px' }} />
    </div>
  );
};

export default Extracurriculars;
