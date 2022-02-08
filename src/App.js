import './App.css';
import Timer from './components/Timer';
import Greeting from './components/greeting';
import Comment from './components/Comment';
import Clock from './components/Clock';



function App() {
  return (
    <div className="App">
      <h2>Welcome to React world</h2>
      <Timer/>
    <Greeting name="to React developer" />
    <Comment name="Jhanker mahbub" text="This is a comment text"  date="25-10-2022" />
    <Clock />
    </div>
  );
}

export default App;
