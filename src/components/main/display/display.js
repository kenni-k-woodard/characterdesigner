import React from 'react';

export default function Display({ mask }) {
  return (
    <div className="display">
      <img src={`/media/${mask}Mask.png`} />
    </div>
  );
}
