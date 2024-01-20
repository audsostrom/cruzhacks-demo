import './App.css';
import cruzhacks from './assets/cruzhacks.svg';

function App() {
  return (
    <div className="content">
      <div className="top-bar">
        <div className="title-text">CRUZHACKS PRESENTATION</div>
        <img className="cruzhacks-logo" src={cruzhacks}/>
      </div>
      <div className="list-wrapper">
        <div className="subtitle">Tips for Success at Hackathons</div>
        <ol type="1">
          <li>Drink lots of water and get some rest</li>
          <li>Find a great team to collaborate with</li>
          <li>Never stop coding!</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
