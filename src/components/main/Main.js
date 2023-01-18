import React, { useState } from 'react';

import Controls from './Controls/Controls.js';
import Display from './Display/Display.js';

export default function Main() {
  const [mask, setMask] = useState('jason');
  const [costume, setCostume] = useState('firefighter');

  return (
    <main>
      main
      <Controls {...{ mask, setMask, costume, setCostume }} />
      <Display {...{ mask, setMask, costume, setCostume }} />
    </main>
  );
}
