import React from 'react';

export default function Controls({ mask, setMask }) {
  const handleMaskChange = (event) => {
    console.log(event.target.value);
    setMask(event.target.value);
  };

  return (
    <div>
      <div className="controls">
        <select name="mask" value={mask} onChange={handleMaskChange}>
          <option value="jason">jason</option>
          <option value="ghostface">ghostface</option>
        </select>
        <label>Mask</label>
      </div>
    </div>
  );
}
