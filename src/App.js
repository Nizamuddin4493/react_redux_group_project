import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
