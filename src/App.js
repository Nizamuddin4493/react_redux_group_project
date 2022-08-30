import Header from './components/Header';
// import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <div className="appContainer">
        <Header />
        <hr />
        {/* <Missions /> */}
        <Rockets />
      </div>
    </>
  );
}

export default App;
