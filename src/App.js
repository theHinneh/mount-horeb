import './App.css';
import {Header,Blank,Footer,Nav,Speech,UpcomingEvents,WhatNext} from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Speech />
      <Blank />
      <UpcomingEvents />
      <WhatNext />
      <Footer />
    </div>
  );
}

export default App;
