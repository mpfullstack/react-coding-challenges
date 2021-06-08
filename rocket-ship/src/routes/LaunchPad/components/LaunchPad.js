import React, { useEffect, useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);
  const [launching, toggleLaunch] = useState(false);

  // setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);

  console.log("LaunchPad render...", rerenderCount)

  useEffect(() => {
    if (launching) {

    } else {

    }
  });

  const handleLaunchClick = (e) => {
    toggleLaunch(!launching);
  }

  return (
    <div className="launchpad">
      <ClassRocket />
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px"
        }}
        value="stop" onClick={handleLaunchClick}>STOP</button>
    </div>
  );
}
