import React, { useState } from 'react';

export default function Controls({ mask, setMask, costume, setCostume, weapon, setWeapon }) {
  const [maskCount, setMaskCount] = useState(0);
  const [costumeCount, setCostumeCount] = useState(0);
  const [weaponCount, setWeaponCount] = useState(0);

  const handleMaskChange = (event) => {
    setMask(event.target.value);
    setMaskCount((currentState) => {
      return currentState + 1;
    });
  };

  const handleCostumeChange = (event) => {
    setCostume(event.target.value);
    setCostumeCount((currentState) => {
      return currentState + 1;
    });
  };

  const handleWeaponChange = (event) => {
    setWeapon(event.target.value);
    setWeaponCount((currentState) => {
      return currentState + 1;
    });
  };

  return (
    <div className="controls">
      <select name="mask" value={mask} onChange={handleMaskChange}>
        <option value="jason">jason</option>
        <option value="ghostface">ghostface</option>
        <option value="michael">michael</option>
        <option value="leatherface">leatherface</option>
      </select>
      <label>Mask</label>
      <select name="costume" value={costume} onChange={handleCostumeChange}>
        <option value="firefighter">firefighter</option>
        <option value="flapper">flapper</option>
        <option value="maid">maid</option>
      </select>
      <label>Costume</label>
      <select name="weapon" value={weapon} onChange={handleWeaponChange}>
        <option value="axe">axe</option>
        <option value="bat">bat</option>
        <option value="knife">knife</option>
      </select>
      <label>Weapon</label>
      <br />
      <p>
        You changed the mask {maskCount}times, the costume {costumeCount} times, and the weapon{' '}
        {weaponCount} times!{' '}
      </p>
    </div>
  );
}
