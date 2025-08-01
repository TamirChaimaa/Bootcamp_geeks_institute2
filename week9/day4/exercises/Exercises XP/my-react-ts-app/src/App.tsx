import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>🌟 Exercise 2: Creating a React Component with TypeScript</h1>
      <Greeting name='imane' messageCount={17}/>
      <br /><hr />

      <h1>🌟 Exercise 3: Using useState Hook with TypeScript in React</h1>
      <Counter/>
      <br /><hr />

      <h1>🌟 Exercise 4: Creating a React Component with Optional Props</h1>
      <UserCard name="Jane" age={30} role="Admin" /><br />
      <UserCard name="Bob" /><br />
      <UserCard />
      <br /><hr />

      <h1>🌟 Exercise 5: Using useEffect Hook with TypeScript in React</h1>
      <UserList/>
    </div>
  );
};

export default App;