import './css/App.css';
import './css/style.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Education from './components/Education';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Volunteering from './components/Volunteering';

function App() {
  return (
    <div className="container">
      <div className="main-content">
        <Header />
        <Profile />
        <Projects />
        <Courses />
        <Education />
        <Volunteering />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
