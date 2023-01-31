import React, { useState } from 'react';

import Controls from './Controls/Controls.js';
import Display from './Display/Display.js';
import Stats from './Stats/Stats.js';

export default function Main() {
  const [mask, setMask] = useState('jason');
  const [costume, setCostume] = useState('firefighter');
  const [weapon, setWeapon] = useState('axe');
  // const [finalWords, setFinalWords] = useState(['']);

  return (
    <main>
      main
      <Controls {...{ mask, setMask, costume, setCostume, weapon, setWeapon }} />
      <Display {...{ mask, setMask, costume, setCostume, weapon, setWeapon }} />
      <Stats />
    </main>
  );
}
