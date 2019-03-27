import React from 'react'
// import axios from 'axios';
import audio from '../../assets/output.mp3'
import ReactAudioPlayer from 'react-audio-player';
//...
const Player = () => (
<ReactAudioPlayer
  src={audio}
  autoPlay
  controls
/>
)
export default Player