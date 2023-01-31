import React, { useState, currentState } from 'react';

export default function Stats() {
  const [words, setWords] = useState(['']);
  const [updateInput, setUpdate] = useState(words);

  const handleWordsChange = (e) => {
    setWords(e.target.value);
  };

  const handleButton = () => {
    setUpdate(words);
    setWords((currentState) => [...currentState, updateInput]);
  };

  return (
    <div>
      <h3>Any final words...?</h3>
      <input value={words} onChange={(e) => setUpdate(e.target.value)}></input>
      <button onClick={handleButton}>goodbye.</button>
    </div>
  );
}
