import React,  { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectorPage from './pages/SelectorPage.js';
import Home from './pages/home';
import GamePage from './pages/gamepage';
import PrevGamePage from './pages/prevGamePage'; // Import the PrevGamePage component
import AnimationPage from './pages/animationpage'
import TrainPage from './pages/training';
import PracticePage from './pages/practice';
import SignupPage from './pages/signupPage';
import BasePage from './pages/basePage';
import BaseTrainingPage from './pages/baseTraining';
import AnimationTrainingPage from './pages/animationTrainingPage';
import TouchTrainingPage from './pages/TouchTrainingPage';
import BasePage2 from './pages/basePage 2.js';
import BaseTrainingPage2 from './pages/baseTraining 2.js';
import SelectValuesPage from './pages/selectValuesPage.js';
import TrainingPage from './pages/trainPage.js';
import { SoundProvider } from './helpers/SoundContext';
import { AppDataProvider } from './context/Context.js';
import STTTest from './pages/sttTest.js';
import './App.css';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      // Removes event listener when component unmounts to prevent memory leaks
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div className="App">
      <SoundProvider>
      <AppDataProvider>
      <Router>
        <Routes>
          <Route path='/' element={isLoggedIn == "true"? <Home /> : <SignupPage />}/>
          <Route path='/game/selection' element={<SelectorPage />}/>
          <Route path='/game/values' element={<SelectValuesPage />}/>
          <Route path='/game/home/:option' element={<Home />}/>
          <Route path='/game/touch2/play/:page' element={<PrevGamePage />}/>  {/* Add a route to the original touch task component*/}
          <Route path='/game/touch/play/:page' element={<GamePage />}/>   {/* Add a route to the updated and improved touch task component*/}
          <Route path='/game/animation/play/:page' element={<AnimationPage />}/>
          <Route path='/game/train/:page' element={<TrainPage />}/>
          <Route path='/game/practice/:page' element={<PracticePage />}/>
          <Route path='/game/base/:page' element={<BasePage />}/>
          <Route path='/game/base/training/:page' element={<BaseTrainingPage />}/>
          <Route path='/game/base2/:page' element={<BasePage2 />}/>
          <Route path='/game/base2/training/:page' element={<BaseTrainingPage2 />}/>
          <Route path='/game/animation/training/:page' element={<AnimationTrainingPage />}/>
          <Route path='/game/touch/training/:page' element={<TouchTrainingPage />}/>
          <Route path="/game/train-custom/:page" element={<TrainingPage />} />
          <Route path='/game/values' element={<SelectValuesPage />}/>
        </Routes>
     </Router>
     </AppDataProvider>
     </SoundProvider>
    </div>
  );
}

// Export the App componet
export default App;
