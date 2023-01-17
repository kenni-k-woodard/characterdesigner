import React, { useState } from 'react';

import Controls from './Controls/Controls.js';
import Display from './Display/Display.js';

export default function Main() {
  const [mask, setMask] = useState('jason');

  return (
    <main>
      main
      <Controls {...{ mask, setMask }} />
      <Display {...{ mask, setMask }} />
    </main>
  );
}
