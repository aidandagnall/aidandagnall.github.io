import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <ParallaxProvider>
      <div className="w-full bg-bg">
          <Home/>
      </div>
    </ParallaxProvider>
  );
}

export default App;
