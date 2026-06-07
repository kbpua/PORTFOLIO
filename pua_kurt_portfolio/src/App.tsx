import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProjectPreviewProvider } from './context/ProjectPreviewContext';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <ProjectPreviewProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<Navigate to="/#projects" replace />} />
            <Route path="/skills" element={<Navigate to="/#skills" replace />} />
            <Route path="/resume" element={<Navigate to="/#resume" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </ProjectPreviewProvider>
    </BrowserRouter>
  );
}

export default App;
