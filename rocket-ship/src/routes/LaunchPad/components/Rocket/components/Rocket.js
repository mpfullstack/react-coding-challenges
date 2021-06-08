import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  console.log("initialLaunchTime", initialLaunchTime)

  return <div>
    <RocketCore initialLaunchTime={initialLaunchTime} />
    <button value="stop">STOP</button>
  </div>;
}

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <div>
      <RocketCore initialLaunchTime={initialLaunchTime} />
    </div>;
  }
}
