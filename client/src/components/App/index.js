import React from 'react';

import './app.scss';

import Users from '../Users';

function App() {
  return (
    <div id="app">
      <header className="app-header"><img src="src/public/assets/img/avataaars.svg" alt="avataaar"/> Custom React | Express Starter Kit</header>
      <Users />
    </div>
  );
}

export default App;
