import React from 'react';

export default function Controls({ mask, setMask, costume, setCostume }) {
  
  const handleMaskChange = (event) => {
    setMask(event.target.value);
  };

  const handleCostumeChange = (event) => {
    setCostume(event.target.value);
  };

  return (
    
    <div className="controls">
      <select name="mask" value={mask} onChange={handleMaskChange}>
        <option value="jason">jason</option>
        <option value="ghostface">ghostface</option>
      </select>
      <label>Mask</label>
      <select name="costume" value={costume} onChange={handleCostumeChange}>
        <option value="firefighter">firefighter</option>
        <option value="flapper">flapper</option>
      </select>
      <label>Costume</label>
    </div>
   
  );
}
