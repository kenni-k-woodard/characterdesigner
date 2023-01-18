import React from 'react';

export default function Display({ mask, costume }) {
  return (
    <div className="display">
      <img src={`/media/${mask}Mask.png`} />
      <img src={`/media/${costume}Costume.png`} />
    </div>
  );
}
