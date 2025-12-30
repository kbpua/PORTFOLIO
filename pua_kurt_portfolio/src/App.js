import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Goals for this project:
// 1. create a simple portfolio website
// 2. add a blog section
// 3. add a contact form
// 4. add a portfolio section
// 5. add a resume section
// 6. add a skills section

// home page contains the following:
// - a header with the title of the website
// - a main section with the following:
//   - a picture of the user
//   - a short bio
//   - a list of projects
//   - a list of skills
//   - a list of contact information

// a button to redirect to resume
// a button to redirect to projects
// a photo of the user
// a list of programming languages

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when path changes
  }, [pathname]);

  return null; // This is a utility component that doesn't render anything
};

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((o) => !o);
  const handleClose = () => setOpen(false);
  // Add to your existing NavBar component
  
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.classList.add('menu-open');
    } else {
      body.classList.remove('menu-open');
    }
    
    return () => body.classList.remove('menu-open');
  }, [open]);
  
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-logo">
        <img
          src={process.env.PUBLIC_URL + '/pua.png'}
          alt="Pua logo"
          style={{ maxWidth: '90px', height: '70px', display: 'block' }}
        />
      </Link>
      <button className={`nav-toggle${open ? ' open' : ''}`} onClick={handleToggle} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`nav-links${open ? ' show' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>Home</NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>Curriculum Vitae</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>Contact Me</NavLink>
      </div>
    </nav>
  );
}

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <p className='headline'>Welcome to Kurt Pua's Portfolio</p>
      <p className='details'>Get to know him better with this website created using React.</p>
      <img src={process.env.PUBLIC_URL + '/profile.png'} alt="Profile" className='profilepic'/>
      <p className="details">Kurt Pua, a student at UP Manila, majoring in Computer Science.</p>
    <button onClick={() => navigate('/contact')} className="buttons">Get in touch</button>
    <br/>

    <p className='details'>Programming languages:</p>
      <img src={process.env.PUBLIC_URL + '/js.png'} alt="JavaScript" className='PL-image'/>
      <img src={process.env.PUBLIC_URL + '/python.png'} alt="Python" className='PL-image'/>
      <img src={process.env.PUBLIC_URL + '/java.png'} alt="Java" className='PL-image'/>
      <img src={process.env.PUBLIC_URL + '/cpp.png'} alt="C++" className='PL-image'/>
      <img src={process.env.PUBLIC_URL + '/c.png'} alt="C++" className='PL-image'/>
      <img src={process.env.PUBLIC_URL + '/react.png'} alt="React" className='PL-image'/>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
    <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile" className='ContactPhoto'/>
    <div className='ContactPage'>
    <br/>
      <ul>
        <p className='details'>Email: kurtpua8@gmail.com</p>
        <img src={process.env.PUBLIC_URL + '/email.png'} alt ="Email" className='contacticon'/>
        <p className='details'>Kurt Pua </p>
        <a href="https://ph.linkedin.com/in/kurt-pua-365252294" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="LinkedIn" className='contacticon'/></a>
        <p className='details'>GitHub: Kurt Pua </p>
        <a href = "https://github.com/kbpua" target ="_blank" rel="noopener noreferrer" alt="github" className="contacticon"><img src={process.env.PUBLIC_URL + '/github.png'} alt="GitHub" className='contacticon'/></a>
        <p className='details'>Facebook: Kurt Pua</p>
        <a href="https://www.facebook.com/wilbur.pua/" target="_blank" rel="noopener noreferrer" alt="facebook" className="contacticon"><img src={process.env.PUBLIC_URL + '/fb.png'} alt="Facebook" className='contacticon'/></a>
        <p className='details'>Phone Number: 0969 038 5088</p>
        <img src={process.env.PUBLIC_URL + '/phone.png'} alt="Phone" className='contacticon'/>
      </ul>
    </div>    
    </div>
  );
}

function CVPage() {
  return (
    <div className='CVPage'>
      <p className='headline'>Curriculum Vitae</p>
      <section className='CVSection'>
      <iframe
      src="https://drive.google.com/file/d/1QA5pXcPENmyW_aVs_tKbw_UJEtBGGWEZ/preview" 
      title="Curriculum Vitae"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      width= "800px" 
      height="1120px"
      style={{border: 'none', minHeight: '500px', background: '#fff'}}
      ></iframe>
      </section>
      <p className='details'> If file fails to load, click this link to access it:</p>
      <a href = "https://drive.google.com/file/d/1yUihLTyKmcmnOh1CDU5SWOYtcooxnGXn/view?usp=sharing">Curriculum Vitae</a>
    </div>
  );
}

function ProjectsPage() {

  // List of Projects
  return (
    <div className = "ProjectsPage">

      <p className='headline'>Kurt's Projects</p>
      <br/>
      <p className='details'>Click on the icons below to view the projects.</p>
      <br />
    <div className ="projects">
      <br/>
  
        <a href="https://kbpua.github.io/sudoku/" target='_blank' rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/sudoku.png'} alt="sudoku" className='project-icon'/></a>
        <a href="https://kbpua.github.io/tic-tac-toe/" target='_blank' rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/tic-tac-toe.png'} alt="tic-tac-toe" className = "project-icon"/></a>
        <a href="https://kbpua.github.io/planner/" target='_blank' rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/planner.png'} className = "project-icon" alt = "planner"/></a>
        <a href="https://kbpua.github.io/qma-app/" target='_blank' rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/QMA.png'} className = "project-icon" alt = "quine-mccluskey"/></a>
        <a href="https://kbpua.github.io/SAS-1-FINAL-PROJECT/" target='_blank' rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/sas.png'} className = "project-icon" alt = "sas-1-final-project"/></a>
        <a href="https://kbpua.github.io/-COMM-10-SENATOR-WEBSITE/" target='_blank' rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/political.png'} className = "project-icon" alt = "political-website"/></a>
    </div>
    <br/>
    <p className='details'>Here are some of my projects:</p>
    <br/>
        <p className='details'>Sudoku Solver</p>
        <p className='details'>Tic Tac Toe Game</p>
        <p className='details'>Planner App</p>
        <p className='details'>Quine-McCluskey Algorithm Visualizer</p>
        <p className='details'>SAS 1 Final Project</p>
        <p className='details'>Political Website</p>
    </div>
  );
}

function App() {
  return (
    <div className="image-background"
    style ={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover'
             }}>
    <Router>
      <ScrollToTop />
      <div className="app"> 
        <main>
      <NavBar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<CVPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </main>
    </div>
      <footer className="footer">
        <p>© 2025 Kurt Pua. All rights reserved.</p>
        <a href="https://ph.linkedin.com/in/kurt-pua-365252294" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="LinkedIn" className='footer-icon'/></a>
        <a href = "https://github.com/kbpua" target ="_blank" rel="noopener noreferrer" alt="github" className="footer-icon"><img src={process.env.PUBLIC_URL + '/github.png'} alt="GitHub" className='footer-icon'/></a>
        <a href="https://www.facebook.com/wilbur.pua/" target="_blank" rel="noopener noreferrer" alt="facebook" className="footer-icon"><img src={process.env.PUBLIC_URL + '/fb.png'} alt="Facebook" className='footer-icon'/></a>
      </footer>
    </Router>
    </div>
  );
}

export default App;
