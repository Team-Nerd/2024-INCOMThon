import React, { useState } from 'react';
import './Category.css';

function CategoryHover2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="Hover">
      <div 
        className={`HoverText2 ${isHovered ? 'hovered' : ''}`} 
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'absolute', top: '190px', left: '650px', width: '150px', height: '32px' }}
      >
        멘토
        {isHovered && (
          <div className="hover-box2">
            <div> 멘토 신청 <span className="arrow">›</span></div>
            <div> 멘토 목록 <span className="arrow">›</span></div>
            <div> 멘티 관리 <span className="arrow">›</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryHover2;