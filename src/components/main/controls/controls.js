import React from 'react';

export default function Controls({ mask, setMask, costume, setCostume, weapon, setWeapon }) {
  
  const handleMaskChange = (event) => {
    setMask(event.target.value);
  };

  const handleCostumeChange = (event) => {
    setCostume(event.target.value);
  };

  const handleWeaponChange = (event) => {
    setWeapon(event.target.value);
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
      <select name="weapon" value={weapon} onChange={handleWeaponChange}>
        <option value="axe">axe</option>
        <option value="bat">bat</option>
      </select>
      <label>Weapon</label>
    </div>
   
  );
}
