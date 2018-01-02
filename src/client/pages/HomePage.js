import React from 'react';

const HomePage = () => (
  <div>
    <div>I'm the Home Super component!</div>
    <button onClick={() => console.log('Hi there')}>Hi there</button>
  </div>
);

export default { component: HomePage };
