import React, { useState } from 'react';
import './Category.css';

function CategoryHover() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="Hover">
      <div 
        className={`HoverText ${isHovered ? 'hovered' : ''}`} 
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'absolute', top: '190px', left: '250px', width: '200px', height: '32px' }}
      >
        전공 별 커뮤니티
        {isHovered && (
          <div className="hover-box">
            <div>공과대학 <span className="arrow">›</span></div>
            <div>자연과학대학 <span className="arrow">›</span></div>
            <div>경영대학 <span className="arrow">›</span></div>
            <div>사범대학 <span className="arrow">›</span></div>
            <div>사회과학대학 <span className="arrow">›</span></div>
            <div>문과대학 <span className="arrow">›</span></div>
            <div>의과대학 <span className="arrow">›</span></div>
            <div>간호대학 <span className="arrow">›</span></div>
            <div>예술체육대학 <span className="arrow">›</span></div>
            <div>소프트웨어융합대학 <span className="arrow">›</span></div>
            <div>바이오시스템융합학부 <span className="arrow">›</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryHover;
