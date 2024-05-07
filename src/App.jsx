import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Medium" targetTime={2}/>
        <TimerChallenge title="Hard" targetTime={3}/>
        <TimerChallenge title="Hardest" targetTime={5}/>

      </div>
    </>
  );
}

export default App;
