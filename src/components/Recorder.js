import React, { useState } from 'react';
import ReactRecord from 'react-record';
import { Button } from 'react-bootstrap';
import { RiRecordCircleLine } from 'react-icons/ri';

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
  };
  const stopRecording = () => {
    setIsRecording(false);
  };
  return (
    <div>
      <ReactRecord record={isRecording} onStop={stopRecording}>
        <span>
          {''}
          {isRecording ? <RiRecordCircleLine size={25} /> : null}
        </span>
        <Button className="mx-3" variant={'success'} onClick={startRecording}>
          Record
        </Button>
        <Button className="mx-31" variant={'danger'} onClick={stopRecording}>
          Stop
        </Button>
      </ReactRecord>
    </div>
  );
};

export default Recorder;
