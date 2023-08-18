
import './App.css';
import Academics from './component/Academics/Academics';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

import Home from './component/Home/Home'
import Intranship from './component/Intranship/Intranship'
import Projects from './component/Projects/Projects';
import Skill from './component/Skill/Skill'
function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Skill/>
    <Academics/>
    <Projects/>
    <Intranship/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;

