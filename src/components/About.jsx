import React from 'react';
import User from './User';

const About = () => {
  const user = {
    name: 'Alice',
    age: 30,
    location: 'Wonderland'
  };

  return (
    <div>
      <h1>About</h1>
      <User user={user}/>
    </div>

  )
}
export default About;