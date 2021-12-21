import React from 'react';

//all the mp3 sounds
const Pads = ({ handlePadClick }) => {
  const sounds = [
    'Funki-Beats',
    'Break-Beats',
    'Funki-Groove',
    'Electric-Guitar',
    'Billie-Jean',
    'Organ-Synth',
    'Stompy',
    'Tanggu',
    'Perc',
  ];
  return (
    <div className="container">
      {sounds.map((sound, i) => (
        <div className={`sound${i}`} key={i}>
          <p>{sound}</p>
          <label className="switch">
            <input type="checkbox" onClick={() => handlePadClick(sounds[i])} />
            <span className="slider round"></span>
          </label>
        </div>
      ))}
    </div>
  );
};
export default Pads;
