import React, { useState } from 'react';
// import "./Looper.css";
import Pads from './Pads';
import PlayPause from './PlayPause';
import Recorder from './Recorder';

const LoopMachine = () => {
  const [toggle, setToggle] = useState([]);
  const [playing, setPlaying] = useState(false);

  //get Index from ObJ
  function getIndex(value, arr, prop) {
    // getIndex from obj
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  }

  const handlePadClick = (beatName) => {
    const audioObj = {
      name: beatName,
      audio: new Audio(`songs/${beatName}.mp3`),
    };
    //infinite loop of the beat
    audioObj.audio.setAttribute('loop', 'true');

    let array = [...toggle];
    const index = getIndex(beatName, array, 'name');

    //if i found
    if (index !== -1) {
      if (playing === true) {
        array[index].audio.pause();
      }
      array.splice(index, 1); //  removing or replacing existing elements
      setToggle(array);
    } else {
      // index is -1
      array.push(audioObj);
      setToggle(array);
      if (playing) {
        audioObj.audio.play();
      }
    }
  };

  const handlePlayPauseClick = (e) => {
    e.preventDefault();
    const clicked = e.target.alt;
    let playing = [...toggle];

    for (let i = 0; i < playing.length; i++) {
      if (clicked === 'playbtn') {
        if (playing === true) return;
        setPlaying(true);
        playing[i].audio.play();
      } else {
        // clicked == 'pausebtn'
        if (playing === false) return;
        setPlaying(false);
        playing[i].audio.pause();
      }
    }
  };

  return (
    <div>
      <PlayPause onClick={handlePlayPauseClick} />
      <Pads handlePadClick={handlePadClick} />
      <Recorder />
    </div>
  );
};
export default LoopMachine;
