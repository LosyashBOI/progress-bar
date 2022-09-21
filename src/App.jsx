import "./App.css";
import ProgressBar from "./features/progress-bar/ProgressBar";

const DATA = [
  {name: 'Sold', color: '#BD1FBE', value: 677},
  {name: 'Got free', color: '#FC64FF', value: 23},
  {name: 'Burned', color: '#99FF99', value: 202},
  {name: 'Free float', color: 'gray', value: 323},
  {name: 'Some 0-value', color: 'black', value: 0},
  {name: 'Very low value', color: 'blue', value: 1},
]

function App() {
  return (
      <div className='app'>
        <ProgressBar items={DATA} width={500} height={50} />
      </div>
  );
}

export default App;
