import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="fullpage">
      <Navbar />
      <Body />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
