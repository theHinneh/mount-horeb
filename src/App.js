import './App.css';
import {Header,Blank,Footer,Nav,Speech,UpcomingEvents,WhatNext} from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Blank />
      <Footer />
      <Speech />
      <UpcomingEvents />
      <WhatNext />
    </div>
  );
}

export default App;
