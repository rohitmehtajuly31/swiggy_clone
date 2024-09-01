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
      <h1>About...</h1>
      <User user={user}/>
      <h1>branch 2 is generated</h1>
      <h1>anotehr change
  
      </h1>
    </div>

  )
}
export default About;