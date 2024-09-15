// Allar myndir eru teknar af mér

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
import DogScreen from './screens/dogScreen';
import EagleScreen from './screens/eagleScreen';
import ArticFoxScreen from './screens/articFoxScreen';
import HorseScreen from './screens/horseScreen';
import SealScreen from './screens/sealScreen';
import AnimalDetailScreen from './screens/animalDetailScreen';
import MatchScreen from './screens/matchScreen';
import HreindyrScreen from './screens/hreindyrScreen';

function App() {
  return (
    <Router>
    <Routes>
    
      <Route path="/" element={<HomeScreen />} />
      <Route path="/animals/hreindyr" element={<HreindyrScreen />} />
      <Route path="/animals/dog" element={<DogScreen />} />
      <Route path="/animals/eagle" element={<EagleScreen />} />
      <Route path="/animals/arctic-fox" element={<ArticFoxScreen />} />
      <Route path="/animals/horse" element={<HorseScreen />} />
      <Route path="/animals/seal" element={<SealScreen />} />
  
      
      <Route path="/animals/:animal" element={<AnimalDetailScreen />} />
  
      
      <Route path="/match" element={<MatchScreen />} />
    </Routes>
  </Router>
  
  );
}

export default App;
