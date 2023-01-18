import React from 'react';

export default function Display({ mask, costume, weapon }) {
  return (
    <div className="display">
      <img src={`/media/${mask}Mask.png`} />
      <img src={`/media/${costume}Costume.png`} />
      <img src={`/media/${weapon}Weapon.png`} />
    </div>
  );
}
