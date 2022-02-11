import './App.css';
import Timer from './components/Timer';
import Greeting from './components/greeting';
import Comment from './components/Comment';
import Clock from './components/Clock';
import EventHandle from './components/EventHandle';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <h2>Welcome to React world</h2>
      <Login/>
      <Timer/>
    <Greeting name="to React developer" />
    <Comment name="Jhanker mahbub" text="This is a comment text"  date="25-10-2022" />
    <Clock />
    <EventHandle/>
    </div>
  );
}

export default App;
